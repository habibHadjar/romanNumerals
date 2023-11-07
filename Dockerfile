FROM node:20

RUN npm install -g nodemon

# Création d'un répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste de l'application
COPY . .

EXPOSE 4242

CMD ["npm", "run", "dev"]

# Fixer le fuseau horaire
ENV TZ Europe/Paris