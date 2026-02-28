# Deployment Guide

## Déploiement sur Vercel

Cette application est conçue pour être déployée sur Vercel, une plateforme specialized pour Next.js.

### Prérequis

1. Un compte Vercel (https://vercel.com)
2. Un compte GitHub avec le code poussé
3. Les variables d'environnement nécessaires (optionnel pour cette version)

### Étapes de déploiement

#### Option 1: Via l'interface Vercel (Recommandée)

1. Visitez https://vercel.com/new
2. Connectez-vous avec votre compte GitHub
3. Importez le dépôt `yelkholte-source/sm`
4. Vercel détectera automatiquement:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. Cliquez sur "Deploy"
6. Attendez que le déploiement se termine

#### Option 2: Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

### Configuration pour la production

Le fichier `vercel.json` contient la configuration spécifique à Vercel:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Variables d'environnement

Pour cette version de base, aucune variable d'environnement sur Vercel n'est requise.

Si vous souhaitez ajouter une configuration personnalisée:

1. Allez dans Project Settings > Environment Variables
2. Ajoutez les variables nécessaires

### Points importants

- **Région de déploiement:** Vercel choisira la région optimale automatiquement
- **Analytics:** Activé par défaut pour les insights de performance
- **Caching:** Les pages statiques sont mises en cache aux edges CDN
- **Auto-redeploy:** Redeploiement auto à chaque push sur la branche main

### Vérification post-déploiement

Après le déploiement:

1. Accédez à l'URL Vercel generated
2. Testez l'interface utilisateur
3. Testez les API endpoints (GET, POST, PUT, DELETE)
4. Vérifiez que l'authentification fonctionne

### Troubleshooting

**Erreur: Build failed**
- Vérifiez les logs Vercel
- Assurez-vous que le `package.json` est correct
- Vérifiez que TypeScript compile sans erreurs

**API ne fonctionne pas en production**
- Vérifiez que les fonctions API sont bien créées en tant que routes
- Les API doivent être dans `app/api/**/route.ts`
- Vérifiez les logs Vercel pour les erreurs de runtime

**Données perdues après redéploiement**
- Les données en mémoire sont perdues à chaque déploiement
- Pour une application real, utiliser une base de données persistante

### URL de déploiement

Une fois déployée, votre application sera accessible à:
- Production: `https://<project-name>.vercel.app`
- Preview URLs seront générées pour chaque pull request

### Support

Pour plus de documentation: https://vercel.com/docs
