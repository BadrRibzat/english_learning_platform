# backend/apps/lessons/management/commands/load_lessons.py

import json
from django.core.management.base import BaseCommand
from apps.lessons.models import Lesson

class Command(BaseCommand):
    help = 'Load lesson data from JSON file'

    def handle(self, *args, **kwargs):
        with open('lesson_data.json') as f:
            lessons_data = json.load(f)

        for lesson_data in lessons_data:
            Lesson.objects.create(**lesson_data)

        self.stdout.write(self.style.SUCCESS('Successfully loaded lesson data'))
