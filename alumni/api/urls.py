from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="apiOverview"),
    # path('post-list/', views.postList, name="postList"),
    # path('post-detail/<str:pk>/', views.postDetail, name="postDetail"),
    # path('post-create/', views.postCreate, name="postCreate"),
    # path('post-update/<str:pk>/', views.postUpdate, name="postUpdate"),

    path('get-posts/<str:pk>/', views.getPosts, name="getPosts"),
    path('create-post/<str:ak>/', views.createPost, name="createPost"),
    path('edit-post/<str:pk>/', views.editPost, name="editPost"),
    path('like-post/<str:ak>/<str:pk>/', views.likePost, name="likePost"),
    path('comment-post/<str:ak>/<str:pk>/', views.commentPost, name="commentPost"),
    path('delete-post/<str:pk>/', views.deletePost, name="deletePost"),
]
