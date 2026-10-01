# Site personnel de raphoxrr

Site personnel statique de Raphaël Heitz, réalisé en HTML, CSS et JavaScript. Son interface s'inspire d'un terminal Linux et présente son profil, ses compétences, son parcours, ses projets, ses références et ses moyens de contact.

## Pages

- `pages/index.html` : écran d'accueil et entrée vers le terminal.
- `pages/home.html` : accueil et présentation.
- `pages/projects.html` : projets.
- `pages/skills.html` : emplacement pour une future vidéo horizontale, compétences personnelles, grandes cases de captures d’écran et clips de gameplay.
- `pages/parcours.html` : parcours de formation.
- `pages/creativity.html` : références et journal de bord de la création du site.
- `pages/viginum.html` : présentation de VIGINUM.
- `pages/contact.html` : liens de contact.
- `pages/about.html` : redirection historique vers l’accueil.

Les pages principales sont regroupées dans `pages/`. Le fichier `index.html` à la racine redirige vers l’écran d’accueil afin que le site continue de s’ouvrir à son adresse habituelle. Les pages réutilisent les styles communs de `style.css`; les styles spécifiques sont répartis dans `css/` et importés par cette feuille, afin de rester disponibles lors des changements de page effectués sans rechargement par le terminal interactif.

## Utiliser le terminal

Depuis l'accueil, cliquez sur **Entrer dans le terminal**. Vous pouvez ensuite utiliser le menu de navigation ou saisir une commande :

| Commande | Action |
| --- | --- |
| `help` | Affiche les commandes et les pages disponibles. |
| `ls` | Affiche les fichiers de pages simulés. |
| `cd home` | Affiche la page d’accueil (remplacez `home` par le nom d’une page). |
| `cd` ou `cd ~` | Efface la sortie et affiche le message d'accueil du terminal. |
| `home` | Affiche directement la page d’accueil (même principe pour les autres pages). |
| `cat home.txt` | Affiche le résumé textuel de la page d’accueil. |
| `pwd`, `whoami`, `hostname`, `date` | Affiche une information simulée ou la date actuelle. |
| `echo texte` | Réaffiche le texte fourni. |
| `fetch` ou `neofetch` | Affiche un résumé système décoratif. |
| `clear` | Efface la sortie du terminal. |

Les commandes précédentes et suivantes peuvent être retrouvées avec les flèches haut et bas du clavier. Le terminal est une interface simulée dans le navigateur ; il ne lance pas de commandes sur le système.

## Organisation des fichiers

```text
.
├── index.html
├── pages/
│   ├── index.html, home.html, projects.html, skills.html
│   ├── parcours.html, creativity.html, viginum.html, contact.html, about.html
├── images/              # Images du site et illustrations du journal créatif
│   └── …
├── style.css            # Styles communs et imports des styles de page
├── css/
│   ├── home.css
│   ├── projects.css
│   ├── skills.css
│   ├── creativity.css
│   ├── viginum.css
│   └── contact.css
├── js/
│   ├── app.js       # Initialisation, navigation et interactions du terminal
│   ├── commands.js  # Interprétation des commandes
│   ├── data.js      # Données des pages et des projets
│   ├── pages.js     # Construction et affichage du contenu des pages
│   └── system.js    # Horloge et informations du navigateur
├── archive/
│   └── mi-projet/   # Ancienne version conservée à part
```

Pour le détail de chaque fonction JavaScript, consultez [FONCTIONS-JAVASCRIPT.md](./FONCTIONS-JAVASCRIPT.md).
