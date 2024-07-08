# apps/quizzes/models.py

from djongo.models import DjongoManager
from djongo import models

class Quiz(models.Model):
    title = models.CharField(max_length=200)
    lesson = models.ForeignKey('courses.Lesson', on_delete=models.CASCADE)

    objects = models.DjongoManager()

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.TextField()

    class Meta:
        abstract = True

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='choices')
    text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

    class Meta:
        abstract = True

class QuizResult(models.Model):
    user = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField()
    completed_at = models.DateTimeField(auto_now_add=True)

    objects = models.DjongoManager()
