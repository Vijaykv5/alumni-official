from django.urls import path

from . import views

urlpatterns = [
    path('', views.rooms, name='rooms'),
    path('create/', views.create_room, name='create_room'),
    path('create-private/<int:pk>/', views.create_private_room, name='create_private_room'),
    path('<slug:slug>/', views.room, name='room'),
]