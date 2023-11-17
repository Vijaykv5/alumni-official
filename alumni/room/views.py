from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Room, Message
from .forms import RoomCreationForm, GroupCreationForm
from django.utils.crypto import get_random_string
from django.contrib.auth.models import User

@login_required
def rooms(request):
    rooms = Room.objects.filter(users=request.user)
    friends = User.objects.all()

    context = {
        'rooms':rooms,
        'friends':friends,
    }
    return render(request, 'room/rooms.html', context)

@login_required
def room(request, slug):
    rooms = Room.objects.filter(users=request.user)
    friends = User.objects.all()

    room = Room.objects.get(slug=slug)
    
    name = room.name

    if room.type == "Direct":
        for user in room.users.all():
            print(user.username)
            if user.username != request.user.username:
                name = user.username

    messages = Message.objects.filter(room=room)[0:25]

    context = {
        'name': name, 
        'room': room, 
        'messages': messages,
        'rooms':rooms,
        'friends':friends,
        }

    return render(request, 'room/room.html', context)

# @login_required
# def create_room(request):
#     if request.method == 'POST':
#         form = RoomCreationForm(request.POST)
#         if form.is_valid():
#             room = form.save()
#             return redirect('room', slug=room.slug)
#     else:
#         form = RoomCreationForm()
#     return render(request, 'room/create_room.html', {'form': form})

@login_required
def peopleList(request):
    users = User.objects.all()
    context = {
        'users':users,
    }

    return render(request, 'room/peopleList.html', context)

@login_required
def create_private_room(request, pk):
    user1 = request.user
    user2 = User.objects.get(id=pk)
    name = user1.username + user2.username
    slug = get_random_string(8,'0123456789')
    # if not Room.objects.filter(users__in=[user1, user2]).exists():
    room = Room.objects.create(name=name, slug=slug, type="Direct")
    room.users.add(user1)
    room.users.add(user2)
    return redirect('room', slug=room.slug)
    
@login_required
def create_group_room(request):
    if request.method == 'POST':
        form = GroupCreationForm(request.POST)
        if form.is_valid():
            room = form.save()
            room.type = 'Group'
            room.slug = get_random_string(8,'0123456789')
            room.save()
            return redirect('room', slug=room.slug)
    else:
        form = GroupCreationForm()

    return render(request, 'room/groupForm.html', {'form': form})