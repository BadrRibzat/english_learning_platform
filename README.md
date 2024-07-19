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

- 3.Generating Frontend Files process:
Generate the following Nuxt.js files with the appropriate code:
- assets/css/main.css
- components/Footer.vue
- components/Header.vue
- components/NavigationBare.vue
- components/LessonCard.vue
- layouts/default.vue
- pages/about.vue
- pages/contact.vue
- pages/index.vue
- pages/login.vue
- pages/portfolio.vue
- pages/register.vue
- plugins/store.js
- static/favicon.ico
- static/logo.png
- store/index.js
- store/modules/auth.js
- store/modules/lessons.js
# Note: Nuxt can manage between .ts extension and .js extention automatically which make it usable for both in a single project .

- 4. Creating the Lessons within each Level:
- 5.Navigate to pages/lessons/level1 and create lesson1.vue, lesson2.vue, and lesson3.vue.
Navigate to pages/lessons/level3 and create lesson1.vue, lesson2.vue, and lesson3.vue.
- 6.Repeat process to Create all Lessons Within All Levels till Level5/lessons/level5 and create lesson1.vue, lesson2.vue, and lesson3.vue.
-Notice: this is an Example Command Sequence For Level1:
- mkdir -p english_learning_platform/frontend/pages/lessons/level1
- cd english_learning_platform/frontend/pages/lessons/level1
- touch lesson1.vue lesson2.vue lesson3.vue
- Repeat the process for levels 2, 3, 4, and 5.
- Create/update Vue components in 'frontend/src/components/Level1/Lesson1/':
- VocabularyComponent.vue
- GrammarComponent.vue
- ReadingComponent.vue
- SpeakingComponent.vue
- WritingComponent.vue
- QuizComponent.vue
to incorporate the content directory with subdirectories example:
'content/level1/lesson1/...':
- vocabulary.json
- grammar.md
- reading.md
- speaking.json
- writing.md
- quiz.json
- These files containing the content details for each level within directories and subdirectories that make it easy to updates and able to grow our app with other contents and levels if we would like to, and that Recomended by Vue.js to be more familiar with and follow best practice 
- Update 'views/Level1/Lesson1View.vue' to incorporate the components 
Update 'router/index.js' to include the new Lessons route
Update 'store/index.js' to manage state for Levels, Lessons
- All new components use Tailwind CSS classes
- Update 'App.vue' to include navigation to the new lessons
- filing each file,with your Personalized contents.
















