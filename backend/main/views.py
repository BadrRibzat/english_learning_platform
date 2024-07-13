# backend/main/views.py

from rest_framework import viewsets
from .models import Level, Lesson, Quiz, Progress
from .serializers import LevelSerializer, LessonSerializer, QuizSerializer, ProgressSerializer
from googletrans import Translator
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LessonDetail(APIView):
    def get(self, request, lesson_id):
        # Dummy content for Lesson 1
        if lesson_id == 1:
            lesson = {
                "id": 1,
                "title": "Alphabet Basics",
                "content": "<p>Welcome to Alphabet Basics. In this lesson, you will learn the English alphabet.</p>",
                "flashcards": [
                    {"id": 1, "front": "A", "back": "Apple"},
                    {"id": 2, "front": "B", "back": "Ball"},
                    # Add remaining alphabet flashcards
                ],
                "quiz": {
                    "question": "What is the first letter of the alphabet?",
                    "options": ["A", "B", "C", "D"],
                    "answer": "A"
                }
            }
        else:
            lesson = {}  # Add other lessons as needed

        return Response(lesson, status=status.HTTP_200_OK)


class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

translator = Translator()

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    @action(detail=True, methods=['get'])
    def translate(self, request, pk=None):
        lesson = self.get_object()
        translated_content = translator.translate(lesson.content, dest=request.query_params.get('lang', 'es')).text
        return Response({'translated_content': translated_content})

chatbot = ChatBot('EnglishLearningBot')
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')


