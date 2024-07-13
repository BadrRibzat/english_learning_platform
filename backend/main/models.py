# backend/main/models.py

from django.db import models
from django.contrib.auth.models import User

class Level(models.Model):
    number = models.IntegerField(unique=True)
    title = models.CharField(max_length=255)

    def __str__(self):
        return f'Level {self.number} - {self.title}'

class Lesson(models.Model):
    level = models.ForeignKey(Level, related_name='lessons', on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(max_length=255)
    content = models.TextField()

    class Meta:
        unique_together = ('level', 'number')

    def __str__(self):
        return f'Level {self.level.number} - Lesson {self.number} - {self.title}'

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, related_name='quizzes', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    options = models.JSONField()

    def __str__(self):
        return f'Quiz for {self.lesson.title} - {self.question}'

class Progress(models.Model):
    user = models.ForeignKey(User, related_name='progresses', on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, related_name='progresses', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username} - {self.lesson.title} - {"Completed" if self.completed else "Incomplete"}'

