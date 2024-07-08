# apps/user_progress/views.py

from rest_framework import viewsets
from .models import UserProgress, SkillProgress
from .serializers import UserProgressSerializer, SkillProgressSerializer

class UserProgressViewSet(viewsets.ModelViewSet):
    serializer_class = UserProgressSerializer

    def get_queryset(self):
        return UserProgress.objects.filter(user=self.request.user)

class SkillProgressViewSet(viewsets.ModelViewSet):
    serializer_class = SkillProgressSerializer

    def get_queryset(self):
        return SkillProgress.objects.filter(user=self.request.user)

