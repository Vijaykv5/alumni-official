from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Room, Message
from .forms import RoomCreationForm

@login_required
def rooms(request):
    rooms = Room.objects.filter(users=request.user)
    return render(request, 'room/rooms.html', {'rooms': rooms})

@login_required
def room(request, slug):
    room = Room.objects.get(slug=slug)
    messages = Message.objects.filter(room=room)[0:25]
    return render(request, 'room/room.html', {'room': room, 'messages': messages})

@login_required
def create_room(request):
    if request.method == 'POST':
        form = RoomCreationForm(request.POST)
        if form.is_valid():
            room = form.save()
            return redirect('room', slug=room.slug)
    else:
        form = RoomCreationForm()
    return render(request, 'room/create_room.html', {'form': form})

@login_required
def create_private_room(request, pk):
    user1 = request.user
    user2 = User.objects.get(id=pk)
    name = user1.username + user2.username

    if not Room.objects.filter(users__in=[user1, user2]).exists():
        room = Room.objects.create(name=name, slug=name, type="Direct")
        room.users.add(user1)
        room.users.add(user2)

        messages = Message.objects.filter(room=room)[0:25]

        return render(request, 'room/room.html', {'room': room, 'messages': messages})
    
    else:
        return redirect('frontpage')