# Application Vue.js – Hello World

Cette application web utilise **Vue 3** avec **Vite** pour afficher un simple message *"Hello World"*.

## 🚀 Instructions

### Développement local

- Installer les dépendances :  
  `npm install`

- Lancer le serveur de développement :  
  `npm run dev`

L'application sera accessible à l'adresse :  
http://localhost:5173

### Docker

- Construire l'image :  
  `docker build -t vue-app .`

- Lancer le conteneur :  
  `docker run -d -p 8080:80 vue-app`

Accessible à :  
http://localhost:8080

### Docker Compose

- Lancer avec :  
  `docker compose up --build`

---

## 🧪 CI/CD – GitHub Actions

Une pipeline CI/CD s’exécute automatiquement à chaque **push** sur la branche `main`.  
Elle effectue les étapes suivantes :

1. **Lint** : `npm run lint` – vérifie le style de code avec ESLint  
2. **Tests** : `npm run test:unit` – exécute les tests avec Vitest  
3. **Build Docker** : construit une image de production  
4. **Push Docker Hub** : pousse l’image vers `docker.io/nathanlamyy/vue-app:nathanlamyy`

Les identifiants sont stockés en toute sécurité via les **secrets GitHub** (`DOCKER_USERNAME`, `DOCKER_PASSWORD`).

---

## 📁 Structure du projet

- `src/` : Code source principal
- `src/components/` : Composants Vue
- `App.vue` : Vue principale
- `Dockerfile` : Image Docker
- `docker-compose.yml` : Orchestration locale
- `.github/workflows/ci.yml` : Pipeline CI/CD GitHub Actions

---

## ⚙️ Choix techniques

- **Vue 3 + Vite** : framework moderne et rapide
- **Vitest** : solution légère et rapide pour les tests unitaires Vue
- **ESLint** : améliore la qualité et cohérence du code
- **Docker + Docker Compose** : portabilité et reproductibilité
- **GitHub Actions** : automatisation du lint, test, build et publication

### Une capture d’´ecran (ou lien) montrant une ex´ecution r´eussie de la pipeline CI/CD
