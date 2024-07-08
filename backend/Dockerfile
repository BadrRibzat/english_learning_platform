# backend/Dockerfile
# this is the Docker file that we offer installation of oure technology stack
# versions in Differents work envirenements Does not matter the system for this # work envirenements: macOS Systems, Windows Systems, Linux Systems .
# This way we are creating container for our backend that will allow Docker to
# Install the required dependencies and technology stack used in the backend 
# In differents environements.
FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
