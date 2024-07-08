# apps/courses/serializers.py

from rest_framework import serializers
from .models import Course, Level, Lesson

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['title', 'description', 'content', 'order']

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ['name', 'description']

class CourseSerializer(serializers.ModelSerializer):
    levels = LevelSerializer(many=True)
    lessons = LessonSerializer(many=True)

    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'levels', 'lessons']
