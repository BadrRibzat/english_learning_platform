# backend/apps/flashcards/models.py

from djongo import models
from djongo.models import DjongoManager

class Flashcard(models.Model):
    front_text = models.TextField()
    back_text = models.TextField()
    image = models.ImageField(upload_to='flashcards/', null=True, blank=True)
    audio = models.FileField(upload_to='flashcards/audio/', null=True, blank=True)

    objects = models.DjongoManager()

    def __str__(self):
        return self.front_text

