# backend/apps/flashcards/views.py

from rest_framework import viewsets
from .models import Flashcard
from .serializers import FlashcardSerializer

class FlashcardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        lesson_id = self.request.query_params.get('lesson', None)
        if lesson_id is not None:
            queryset = queryset.filter(lesson_id=lesson_id)
        return queryset
