# Student Management Application

Une application web complète de gestion des étudiants construite avec Next.js, React, et TypeScript.

## Fonctionnalités Principales

- ✅ **Gestion des étudiants (CRUD)**
  - Créer des étudiants
  - Lister tous les étudiants
  - Modifier les informations des étudiants
  - Supprimer des étudiants

- ✅ **Authentification utilisateur**
  - Inscription de nouveaux utilisateurs
  - Connexion sécurisée
  - Gestion des sessions

- ✅ **Interface utilisateur responsive**
  - Pages HTML/CSS modernes
  - Navigation intuitive
  - Formulaires de saisie validés

## Stack Technologique

- **Frontend:** Next.js 14, React 18, TypeScript
- **Backend:** Next.js API Routes
- **Base de données:** En mémoire (pour développement)
- **Authentification:** Service simple avec hachage Base64
- **Déploiement:** Vercel

## Installation et Configuration

### Prérequis

- Node.js v24.14.0 ou supérieur
- npm 11.0.0 ou supérieur
- Git

### Étapes d'installation

1. **Cloner le dépôt:**
```bash
git clone https://github.com/yelkholte-source/sm.git
cd sm
```

2. **Installer les dépendances:**
```bash
npm install
```

3. **Lancer le serveur de développement:**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## Commandes disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire pour la production
- `npm start` - Démarrer le serveur de production
- `npm run lint` - Exécuter le linter ESLint

## Structure du projet

```
app/
├── api/                              # Routes API
│   ├── auth/
│   │   ├── login/route.ts           # Connexion utilisateur
│   │   └── register/route.ts        # Inscription utilisateur
│   └── students/
│       ├── route.ts                 # CRUD étudiants
│       └── [id]/route.ts            # CRUD étudiant spécifique
├── services/                         # Services business logic
│   ├── authService.ts               # Logique d'authentification
│   └── studentService.ts            # Logique des étudiants
├── students/                         # Pages étudiants
│   ├── page.tsx                     # Liste des étudiants
│   ├── new/page.tsx                 # Créer un étudiant
│   └── [id]/edit/page.tsx           # Modifier un étudiant
├── login/page.tsx                   # Page de connexion
├── register/page.tsx                # Page d'inscription
├── layout.tsx                       # Layout racine
├── page.tsx                         # Accueil
└── globals.css                      # Styles globaux
```

## API Endpoints

### Étudiants

- **GET /api/students** - Récupérer tous les étudiants
- **POST /api/students** - Créer un étudiant
- **GET /api/students/[id]** - Récupérer un étudiant spécifique
- **PUT /api/students/[id]** - Modifier un étudiant
- **DELETE /api/students/[id]** - Supprimer un étudiant

### Authentification

- **POST /api/auth/register** - Inscription (email, password, name)
- **POST /api/auth/login** - Connexion (email, password)

## Déploiement sur Vercel

Le projet est configuré pour être déployé sur Vercel avec le fichier `vercel.json`.

1. Connectez-vous à Vercel
2. Sélectionnez ce dépôt GitHub
3. Vercel détectera automatiquement Next.js et le déploiera
4. L'application sera accessible via votre URL Vercel

## Notes de développement

- Les données sont stockées en mémoire pour le développement
- Pour une application de production, utiliser une vraie base de données (PostgreSQL, MongoDB, etc.)
- L'authentification utilise Base64 pour le développement - utiliser bcrypt ou argon2 en production
- Le stockage de session doit être migré vers une solution persistante (Redis, database sessions)

## Auteur

**YELKHOLTE** - y.elkholte@esisa.ac.ma

## Licence

MIT
