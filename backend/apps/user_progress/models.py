# apps/user_progress/models.py

from djongo import models

class UserProgress(models.Model):
    user = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    lesson = models.ForeignKey('courses.Lesson', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    last_accessed = models.DateTimeField(auto_now=True)

    objects = models.DjongoManager()

class SkillProgress(models.Model):
    user = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    skill = models.CharField(max_length=100)  # e.g., 'vocabulary', 'grammar', 'reading'
    level = models.IntegerField(default=1)

    objects = models.DjongoManager()
