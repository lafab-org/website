# Site web de La Fabrique

Site statique généré avec [Eleventy](https://www.11ty.dev/), stylisé avec [CUBE CSS](https://cube.fyi/) et les primitives de mise en page [Every Layout](https://every-layout.dev/).


## Prérequis

### Installer Node.js LTS

Via le gestionnaire de paquets Linux (Ubuntu/Debian) — attention, la version fournie peut être ancienne :

```bash
sudo apt install nodejs npm
```

Ou alors via [nvm](https://github.com/nvm-sh/nvm)

```bash
# installer nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/HEAD/install.sh | bash

# ouvrir un nouveau terminal, puis :
nvm install --lts
```


## Lancer le site localement

```bash
npm install   # une seule fois
npm start     # http://localhost:8080
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