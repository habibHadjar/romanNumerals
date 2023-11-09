Le but initial de ce projet est de permettre à un utilisateur de renseigner un integer en base 10 et de récupérer l'équivalence en chiffre Romain.

## Lancer le projet

### Dev:
#### Dépendances/Environnement:
    - Docker
    - docker-compose et/ou docker desktop
#### Lancement:
```shell
    docker-compose up -d --build --remove-orphans
```

### Prod:
#### Dépendances/Environnement
    - OVH
    - Ubuntu
    - Apache 2
    - Docker & Docker-Compose
#### Lancement:
```shell
//Connexion SSH sur le VPS 193.70.84.157
cd /var/www/html/romanNumerals
git pull
docker-compose up -d --build 
//(le .env de la prod défini le NODE_ENV sur 'prod')
```

### Lancer les tests :
```shell
    docker exec -it cycle-production sh
    cd app && npm run test
```

## TODO :

- Concertation sur l'utilité de mettre en place un ou plusieurs pipeline CI-CD avec lancement des tests

<hr>

### DOCUMENTATION:

Voir lien : 
<u>
<li><a href="./documentation/api.md">API</a></li>
</u>
    


## PHASE 1:

- Compréhension du besoin (via cachier des charges fourni par le client)
- Recherche des règles à mettre en place pour solutionner la problématique
- Concertation sur l'architecture du projet + répartition des tâches
- Choix du langage - NODEJS, le VPS à besoin d'un port non standard (80, 443)

## PHASE 2:

- Mise en place de l'architecture du projet
- Mise en ligne (VPS/Domaine/Https)
- Ecriture de l'algorithme
- Ecriture des Tests (pas forcément dans cette ordre, exemple TDD)
- Formulaire HTML

## PHASE 3:

- Vérification que la cahier des charges à été totalement respecté
- Livraison de la version Alpha
- Demande de retour client sur la version Alpha
- Correction, adaptation du programme après retour

## PHASE 4:

- Livraison d'une version Bêta de la feature
- Retour clients pour d'éventuels modifications supplémentaire
- Correction éventuels et livraison "finale"


## Cycle de vie

- 08/11 La priorité à été mise sur l'inverse de la demande initial à savoir, renseigner un nombre en chiffre romain et récupérer l'équivalence avec un integer en base 10. (DONE)

- 09/11 Des cas d'usage ont été rajoutés, il faut faire une API REST (Dans notre cas une route en POST), faire en sorte que la lettre O retourne 0 et ajouter du cache pour les réponses déjà joué.

La 1ère itération va consister à traiter la lettre O en 0 
La deuxième itération va être focus sur la création de l'api rest(route, method, retour)
La 3ème itération sera sur la mise en cache des résultats précédent. Besoin de concertation pour savoir si la mise en cache se base sur l'ip du visiteur (faire du cache de résultat par ip de visiteur).

 <u>Il est important de souligner que cette dernière itération n'apporte aucune valeur ajouté (pas d'appel à une API externe, pas de requête en base de donnée), à l'inverse, au vu des calculs effectées par le programme actuel, le coût sera probablement plus élevé à faire du cache (que ce soit en terme de temps de développement et de ressources utilisés par le serveur).</u>

 ### Retrospective

 Lien: <a href="/documentation/retrospective.md">Rétrospective</a>