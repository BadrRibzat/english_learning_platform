# backend/myapp/views.py:

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Level, Lesson, Quiz, UserProgress, UserProfile
from .serializers import (
    UserSerializer, LevelSerializer, LessonSerializer,
    QuizSerializer, UserProgressSerializer, UserProfileSerializer
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserProgressViewSet(viewsets.ModelViewSet):
    queryset = UserProgress.objects.all()
    serializer_class = UserProgressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserProgress.objects.filter(user=self.request.user)

    @action(detail=False, methods=['post'])
    def update_progress(self, request):
        lesson_id = request.data.get('lesson_id')
        completed = request.data.get('completed', False)
        score = request.data.get('score', 0)

        try:
            progress, created = UserProgress.objects.get_or_create(
                user=request.user,
                lesson_id=lesson_id,
                defaults={'completed': completed, 'score': score}
            )
            if not created:
                progress.completed = completed
                progress.score = score
                progress.save()
            return Response({'status': 'progress updated'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)

    @action(detail=False, methods=['post'])
    def update_language(self, request):
        language = request.data.get('language')
        if language:
            profile, created = UserProfile.objects.get_or_create(user=request.user)
            profile.preferred_language = language
            profile.save()
            return Response({'status': 'language updated'}, status=status.HTTP_200_OK)
        return Response({'error': 'Language not provided'}, status=status.HTTP_400_BAD_REQUEST)
