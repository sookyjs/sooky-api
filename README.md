
# Sooky API

Sooky API est une API de gestion d'outils de partage, permettant la création, la récupération et la suppression de liens de partage pour différents services. Ce guide explique comment configurer le projet et tester les routes via Postman.

## Prérequis

- Node.js et npm installés
- MongoDB en cours d'exécution
- Postman pour tester les requêtes

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/nazimboudeffa/sooky-api.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd sooky-api
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Configurez les variables d'environnement dans un fichier `.env` à la racine du projet :

   ```
   PORT=9000
   DATABASE_URL=mongodb://localhost:27017/sooky
   JWT_SECRET=votre_secret_jwt
   ```

5. Démarrez le serveur :

   ```bash
   npm start
   ```

L'API sera maintenant accessible à `http://localhost:9000`.

## Tester les Routes avec Postman

### 1. Créer un Utilisateur et Obtenir un Token JWT

Avant de pouvoir utiliser les routes protégées, créez un utilisateur et obtenez un token d'authentification.

- **Méthode** : POST
- **URL** : `http://localhost:9000/api/v1/auth/sign-up`
- **Corps de la requête** (JSON) :
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

Si la création réussit, notez le `token` retourné dans la réponse. Ce token sera nécessaire pour accéder aux routes protégées.

### 2. Créer un Lien de Partage (CREATE SHARE-LINK)

- **Méthode** : POST
- **URL** : `http://localhost:9000/api/v1/store/tools/social/share-link`
- **En-têtes** :
  - `Authorization`: `Bearer <votre_token>`
- **Corps de la requête** (JSON) :
  ```json
  {
    "url": "https://example.com/product/123",
    "platform": "facebook",
    "message": "Découvrez notre nouveau produit !"
  }
  ```

### 3. Récupérer un Lien de Partage par ID (GET SHARE-LINK)

- **Méthode** : GET
- **URL** : `http://localhost:9000/api/v1/store/tools/social/share-link/:id`
  - Remplacez `:id` par l'ID du lien de partage que vous souhaitez récupérer.
- **En-têtes** :
  - `Authorization`: `Bearer <votre_token>`

### 4. Mettre à Jour un Lien de Partage par ID (UPDATE SHARE-LINK)

- **Méthode** : PATCH
- **URL** : `http://localhost:9000/api/v1/store/tools/social/share-link/:id`
  - Remplacez `:id` par l'ID du lien de partage que vous souhaitez mettre à jour.
- **En-têtes** :
  - `Authorization`: `Bearer <votre_token>`
- **Corps de la requête** (JSON) :
  ```json
  {
    "url": "https://example.com/product/123",
    "platform": "facebook",
    "message": "Découvrez notre nouveau produit !"
  }
  ```

### 5. Supprimer un Lien de Partage par ID (DELETE SHARE-LINK)

- **Méthode** : DELETE
- **URL** : `http://localhost:9000/api/v1/store/tools/social/share-link/:id`
  - Remplacez `:id` par l'ID du lien de partage à supprimer.
- **En-têtes** :
  - `Authorization`: `Bearer <votre_token>`

### 6. Récupérer Tous les Liens de Partage (GET ALL SHARE-LINK)

- **Méthode** : GET
- **URL** : `http://localhost:9000/api/v1/store/tools/social/share-links`
- **En-têtes** :
  - `Authorization`: `Bearer <votre_token>`

## Résumé des Routes

| Méthode | URL                                         | Description                                     |
|---------|---------------------------------------------|-------------------------------------------------|
| POST    | `/api/v1/auth/sign-up`                      | Créer un utilisateur                            |
| POST    | `/api/v1/store/tools/social/share-link`     | Créer un lien de partage                        |
| GET     | `/api/v1/store/tools/social/share-link/:id` | Récupérer un lien de partage par ID             |
| PATCH   | `/api/v1/store/tools/social/share-link/:id` | Mettre à jour un lien de partage par ID         |
| DELETE  | `/api/v1/store/tools/social/share-link/:id` | Supprimer un lien de partage par ID             |
| GET     | `/api/v1/store/tools/social/share-links`    | Récupérer tous les liens de partage SocialShare |

## Notes

- Assurez-vous d'inclure le token JWT dans l'en-tête `Authorization` pour les routes protégées.
- Vérifiez que MongoDB est bien en cours d'exécution et que la connexion est correcte dans votre fichier `.env`.

---

Ce guide fournit toutes les informations nécessaires pour configurer et tester les routes de l'API Sooky avec Postman.