"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# backend/config/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.authentication.views import RegisterView, LoginView, UserDetailView
from apps.courses.views import CourseViewSet
from apps.lessons.views import LessonViewSet
from apps.flashcards.views import FlashcardViewSet
from apps.quizzes.views import QuizViewSet
from apps.user_progress.views import UserProgressViewSet, SkillProgressViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'lessons', LessonViewSet)
router.register(r'flashcards', FlashcardViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'user-progress', UserProgressViewSet, basename='user-progress')
router.register(r'skill-progress', SkillProgressViewSet, basename='skill-progress')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/register/', RegisterView.as_view(), name='register'),
    path('api/auth/login/', LoginView.as_view(), name='login'),
    path('api/auth/user/', UserDetailView.as_view(), name='user-detail'),
]

