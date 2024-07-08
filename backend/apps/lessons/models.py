# backend/apps/lessons/models.py

from django.db import models

class Lesson(models.Model):
    LEVEL_CHOICES = (
        (1, 'Beginner'),
        (2, 'Intermediate'),
        (3, 'Advanced'),
    )

    title = models.CharField(max_length=200)
    level = models.IntegerField(choices=LEVEL_CHOICES)
    order = models.IntegerField()
    description = models.TextField()
    content = models.TextField()
    
    class Meta:
        unique_together = ['level', 'order']
        ordering = ['level', 'order']

    def __str__(self):
        return f"Level {self.level} - Lesson {self.order}: {self.title}"

class LessonActivity(models.Model):
    ACTIVITY_TYPES = (
        ('quiz', 'Quiz'),
        ('flashcards', 'Flashcards'),
        ('writing', 'Writing Exercise'),
        ('listening', 'Listening Exercise'),
        ('speaking', 'Speaking Exercise'),
    )

    lesson = models.ForeignKey(Lesson, related_name='activities', on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=20, choices=ACTIVITY_TYPES)
    content = models.JSONField()

    def __str__(self):
        return f"{self.get_activity_type_display()} for {self.lesson.title}"

# backend/apps/lessons/admin.py

from django.contrib import admin
from .models import Lesson, LessonActivity

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'level', 'order')
    list_filter = ('level',)
    search_fields = ('title', 'description')

@admin.register(LessonActivity)
class LessonActivityAdmin(admin.ModelAdmin):
    list_display = ('lesson', 'activity_type')
    list_filter = ('activity_type',)
    search_fields = ('lesson__title',)

# backend/apps/lessons/serializers.py

from rest_framework import serializers
from .models import Lesson, LessonActivity

class LessonActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LessonActivity
        fields = ['id', 'activity_type', 'content']

class LessonSerializer(serializers.ModelSerializer):
    activities = LessonActivitySerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'level', 'order', 'description', 'content', 'activities']

# backend/apps/lessons/views.py

from rest_framework import viewsets
from .models import Lesson
from .serializers import LessonSerializer

class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

# backend/apps/lessons/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LessonViewSet

router = DefaultRouter()
router.register(r'lessons', LessonViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# backend/config/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.lessons.urls')),
    path('api/', include('apps.authentication.urls')),
    path('api/', include('apps.user_progress.urls')),
]
