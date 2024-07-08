# apps/authentication/models.py

from django.contrib.auth.models import AbstractUser, Group, Permission
from djongo.models import DjongoManager
from djongo import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_student = models.BooleanField(default=True)
    is_teacher = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name='authentication_user_set',  # Add related_name to avoid clashes
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='authentication_user_set',  # Add related_name to avoid clashes
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_query_name='user',
    )

    objects = models.DjongoManager()

