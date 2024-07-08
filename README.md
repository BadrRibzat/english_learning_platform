# english_learning_platform

# Process:
====> 1.Set up the backend (Django with MongoDB):
- Create a new directory for the project and set up a virtual environment:
	mkdir english_learning_platform
	cd english_learning_platform
	python3 -m venv venv
	source venv/bin/activate

- Installing the required packages:
	pip install django djongo pymongo dnspython

- Creating a new Django project:
	django-admin startproject config backend
	cd backend
# Note, HighLight Important: 
# When Modify The config/settings.py file to use MongoDB
# You Can Not use (makemigration), according sources from the Django community after my reaserche because i have faced this issues durring my first project setting up that's why I did my researches and i found it more important to be noticed .

- Modify the config/settings.py file to use MongoDB:
	# config/settings.py

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'english_learning_db',
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
        }
    }
}

# Adding the following apps to the INSTALLED_APPS
INSTALLED_APPS = [
    # ...
    'apps.authentication',
    'apps.courses',
    'apps.flashcards',
    'apps.quizzes',
    'apps.user_progress',
]

- Creating the app directories:
	mkdir -p apps/{authentication,courses,flashcards,quizzes,user_progress}




