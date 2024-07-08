# backend/apps/courses/models.py

from djongo import models
from djongo.models import DjongoManager

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.TextField()
    order = models.IntegerField()
    
    # Adding the DjongoManager
    objects = DjongoManager()

    def __str__(self):
        return self.title

