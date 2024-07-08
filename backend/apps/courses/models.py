# apps/courses/models.py

from djongo import models

class Level(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        abstract = True

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.TextField()
    order = models.IntegerField()

    class Meta:
        abstract = True

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    levels = models.ArrayField(model_container=Level)
    lessons = models.ArrayField(model_container=Lesson)

    objects = models.DjongoManager()
