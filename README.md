# English Learning Platform

## Project Setup:

### Note, HighLight Important: 
 When Modify The config/settings.py file to use MongoDB
You Can Not use (makemigration), according sources from the Django community after my reaserche because i have faced this issues durring my first project setting up that's why I did my researches and i found it more important to be noticed .

### 1. Setting up the Backend with Django and MongoDB:

#### Creating a New Project and Virtual Environment:

To get started, create a new directory for your project and set up a virtual environment to keep everything isolated:

```bash
mkdir english_learning_platform
cd english_learning_platform
python3 -m venv venv
source venv/bin/activate

### Installing the required packages:
pip install django djongo pymongo dnspython

### Creating a new Django project:
django-admin startproject config backend
cd backend

### Modify the config/settings.py file to use MongoDB:
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

# Adding the following apps to the INSTALLED_APPS:

INSTALLED_APPS = [
    # ... other installed apps
    'apps.authentication',
    'apps.courses',
    'apps.flashcards',
    'apps.quizzes',
    'apps.user_progress',
]

# Note:
# When modifying the `config/settings.py` file to use MongoDB,
# you cannot use `makemigrations` as per sources from the Django community after my research. I encountered this issue during my initial project setup and conducted further research to address it.

### Creating the app directories:
mkdir -p apps/{authentication,courses,flashcards,quizzes,user_progress}

This setup establishes the backend structure for the English Learning Platform using Django with MongoDB as the database backend. Further steps will involve developing frontend components, integrating APIs, and enhancing functionality.


