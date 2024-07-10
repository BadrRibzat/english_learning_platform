# Alx-Se webstack portfolio project
- English_learning_platfiorm:
- Overview

- This is a web application built using Django (backend) and 
- Nuxt.js (frontend) for an English learning platform. 
- Instead of using a traditional SQL database like SQLite or PostgreSQL, 
- This project uses MongoDB as the database.
- Backend Setup
-  1.Create a virtual environment:
python3 -m venv env
source env/bin/activate

- 2.Install dependencies:
pip install -r requirements.txt

- 3.Configure MongoDB connection:
- Install the djongo package, which is a Django adapter for MongoDB:
pip install djongo djongo

- Update the settings.py file in the backend directory to configure the MongoDB connection:
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'english_learning_platform',
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
            'username': 'BadrRibzat',
            'password': '9474b1d7569927d3b35785370fe8910a',
            'authSource': 'english_learning_platform'
        }
    }
}
- 4.Run migrations:
	Note: when using MongoDB and Django You should not run migrations
python manage.py runserver

-Frontend Setup
- 1.Install dependencies:
cd frontend
npm install

- 2.Start the development server:
npm run dev
















