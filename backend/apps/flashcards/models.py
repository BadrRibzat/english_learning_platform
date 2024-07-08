# apps/flashcards/models.py

from djongo import models

class Flashcard(models.Model):
    front_text = models.TextField()
    back_text = models.TextField()
    image = models.ImageField(upload_to='flashcards/', null=True, blank=True)
    audio = models.FileField(upload_to='flashcards/audio/', null=True, blank=True)
    lesson = models.ForeignKey('courses.Lesson', on_delete=models.CASCADE)

    objects = models.DjongoManager()
