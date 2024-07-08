# apps/authentication/models.py

from django.contrib.auth.models import AbstractUser
from djongo import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_student = models.BooleanField(default=True)
    is_teacher = models.BooleanField(default=False)

    objects = models.DjongoManager()
