# english_learning_platform/backend/myapp.models.py:

from djongo import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    class Meta:
        abstract = False
