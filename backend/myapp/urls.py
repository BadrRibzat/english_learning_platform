# backend/myapp/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('users/', views.get_users, name='get_users'),
    path('admin/dashboard/', views.admin_dashboard, name='admin_dashboard'),
]