FROM node:20-alpine

# Créer l'utilisateur et son groupe, installer des paquets
WORKDIR /app

COPY . .

RUN npm install -g

EXPOSE 4242

CMD ["npm", "start"]

# Fixer le fuseau horaire
ENV TZ Europe/Paris