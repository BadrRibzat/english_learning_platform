# frontend/Dockerfile
# As I Explained in the backend/Dockerfile 
# This is used for the frontend dependencies and technology stack versions.
# It ensure the exectlly technology stack installation and 
# Stablised dependencies the same as it is used in this developements 
# Proccesses due to the container file that is created in this developements proccess.
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
