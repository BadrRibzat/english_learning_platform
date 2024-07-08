# apps/quizzes/views.py

from rest_framework import viewsets
from .models import Quiz, QuizResult
from .serializers import QuizSerializer, QuizResultSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizResultViewSet(viewsets.ModelViewSet):
    queryset = QuizResult.objects.all()
    serializer_class = QuizResultSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
