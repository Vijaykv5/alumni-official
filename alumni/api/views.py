from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/post-list/',
        'Detail View':'/post-detail/<str:pk>',
        'Create':'/post-create/',
        'Update':'/post-update/<str:pk>/',
        'Delete':'/post-delete/<str:pk>/',
    }

    return Response(api_urls)

# @api_view(['GET'])
# def postList(request):
#     posts = Post.objects.all()
#     serializer = PostSerializer(posts, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def postDetail(request, pk):
#     post = Post.objects.get(id = pk)
#     serializer = PostSerializer(post, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def postCreate(request):
#     serializer = PostSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['POST'])
# def postUpdate(request, pk):
#     post = Post.objects.get(id=pk)
#     serializer = PostSerializer(instance=post, data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['DELETE'])
# def postDelete(request, pk):
#     post = Post.objects.get(id=pk)
#     post.delete()

#     return Response('Post successfully deleted!')

@api_view(['GET'])
def getPosts(request, pk):
    account = Account.objects.get(id=pk)
    posts = Post.objects.filter(account=account)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createPost(request, ak):
    account = Account.objects.get(id=ak)
    post = Account.objects.create(account=account)
    serializer = PostSerializer(instance=post, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def editPost(request, pk):
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(instance=post, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def likePost(request, ak, pk):
    account = Account.objects.get(id=ak)
    post = Post.objects.get(id=pk)

    if post.like_set.filter(account=account).exists():
        post.like_set.filter(account=account).delete()
        return Response('Post unliked')
    else:
        post.like_set.create(account=account)
        return Response('Post liked')   

@api_view(['POST'])
def commentPost(request, ak, pk):
    account = Account.objects.get(id=ak)
    post = Post.objects.get(id=pk)
    comment = Comment.objects.create(account=account)

    post.comments.add(comment) 

    return Response('Comment posted')   

@api_view(['DELETE'])
def deletePost(request, pk):
    post = Post.objects.get(id=pk)
    post.delete()

    return Response('Post successfully deleted!')
