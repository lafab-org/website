# Site web de La Fabrique

Site statique généré avec [Eleventy](https://www.11ty.dev/).

## Sans Docker

**Prérequis :** [Node.js LTS](https://nodejs.org) installé sur votre machine.

```bash
npm install   # une seule fois
npm start     # http://localhost:8080
```

## Avec Docker

```bash
docker compose up dev    # développement — http://localhost:8080
docker compose up prod   # production    — http://localhost:80
```

---

Le dossier `_site/` est généré automatiquement.
