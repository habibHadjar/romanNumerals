FROM node:18

# Créer l'utilisateur et son groupe, installer des paquets
RUN apt-get update \
    && apt-get install -y sudo \
    && apt-get install -y less \
    && apt-get install -y mycli \
    && apt-get install -y tzdata \
    && npm install

# Fixer le fuseau horaire
ENV TZ Europe/Paris

# L'interprète par défaut
ENV SHELL /bin/bash

# Le repertoire maison par défaut
WORKDIR app

RUN /bin/bash