# backend/apps/courses/tests.py

from django.test import TestCase
from .models import Course, Level, Lesson

class CourseModelTest(TestCase):
    def setUp(self):
        self.course = Course.objects.create(
            name="English 101",
            description="Introduction to English"
        )
        self.level = Level(name="Beginner", description="For absolute beginners")
        self.lesson = Lesson(
            title="Alphabet",
            description="Learn the English alphabet",
            content="A, B, C, D...",
            order=1
        )
        self.course.levels.append(self.level)
        self.course.lessons.append(self.lesson)
        self.course.save()

    def test_course_creation(self):
        self.assertEqual(self.course.name, "English 101")
        self.assertEqual(self.course.description, "Introduction to English")
        self.assertEqual(len(self.course.levels), 1)
        self.assertEqual(len(self.course.lessons), 1)

    def test_level_in_course(self):
        self.assertEqual(self.course.levels[0].name, "Beginner")

    def test_lesson_in_course(self):
        self.assertEqual(self.course.lessons[0].title, "Alphabet")
