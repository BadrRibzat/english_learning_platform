# apps/user_progress/serializers.py

from rest_framework import serializers
from .models import UserProgress, SkillProgress

class UserProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgress
        fields = ['id', 'user', 'lesson', 'completed', 'last_accessed']

class SkillProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillProgress
        fields = ['id', 'user', 'skill', 'level']
