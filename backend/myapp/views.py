# backend/myapp/views.py

from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Lesson, Exercise, UserProgress

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({'error': 'Please provide username, email, and password'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except:
        return Response({'error': 'Unable to register user'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_users(request):
    users = User.objects.all().values('username', 'email')
    return Response({'users': list(users)})

@api_view(['GET'])
def admin_dashboard(request):
    user_data = User.objects.all().values('username', 'email')
    lesson_data = Lesson.objects.all().values('title', 'level', 'order')
    exercise_data = Exercise.objects.all().values('lesson__title', 'question')

    return Response({
        'user_data': list(user_data),
        'lesson_data': list(lesson_data),
        'exercise_data': list(exercise_data)
    })
