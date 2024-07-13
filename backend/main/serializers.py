# backend/main/serializers.py

from rest_framework import serializers
from .models import Level, Lesson, Quiz, Progress

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ['number', 'title']

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['level', 'number', 'title', 'content']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['lesson', 'question', 'answer', 'options']

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['user', 'lesson', 'completed']

