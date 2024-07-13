# backend/main/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LevelViewSet, LessonViewSet, QuizViewSet, ProgressViewSet
from django.urls import path
from .views import LessonDetail

urlpatterns = [
    path('lessons/<int:lesson_id>/', LessonDetail.as_view(), name='lesson-detail'),
]

router = DefaultRouter()
router.register(r'levels', LevelViewSet)
router.register(r'lessons', LessonViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'progress', ProgressViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

