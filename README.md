# Site web de La Fabrique

Site statique généré avec [Eleventy](https://www.11ty.dev/), stylisé avec [CUBE CSS](https://cube.fyi/) et les primitives de mise en page [Every Layout](https://every-layout.dev/).

## Lancer le site

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

## Ajouter du contenu

### Une page statique

Créer un dossier dans `src/pages/` avec un fichier `index.md` et les images associées :

```
src/pages/mon-activite/
  index.md
  photo.jpg
```

### Une actualité

Même structure dans `src/news/`, avec le dossier préfixé par la date :

```
src/news/2025-06-01-inauguration/
  index.md
  photo.jpg
```

### Une réalisation

Même structure dans `src/realisations/` :

```
src/realisations/2025-05-15-mon-projet/
  index.md      # front matter : title, maker, date
  photo.jpg
```

---

Le dossier `_site/` est généré automatiquement, ne pas le modifier.
