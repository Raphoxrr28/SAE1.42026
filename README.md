# Site personnel de raphoxrr

Site personnel statique de Raphaël Heitz, réalisé en HTML, CSS et JavaScript. Son interface s'inspire d'un terminal Linux et présente son profil, ses compétences, son parcours, ses projets, ses références et ses moyens de contact.

## Pages

- `index.html` : écran d'accueil et entrée vers le terminal.
- `about.html` : présentation.
- `projects.html` : projets.
- `skills.html` : compétences.
- `parcours.html` : parcours de formation.
- `creativity.html` : références et journal de bord de la création du site.
- `viginum.html` : présentation de VIGINUM.
- `contact.html` : liens de contact.

Chaque page possède son propre fichier HTML et réutilise la feuille de style et les scripts du dossier `js/`.

## Utiliser le terminal

Depuis l'accueil, cliquez sur **Entrer dans le terminal**. Vous pouvez ensuite utiliser le menu de navigation ou saisir une commande :

| Commande | Action |
| --- | --- |
| `help` | Affiche les commandes et les pages disponibles. |
| `ls` | Affiche les fichiers de pages simulés. |
| `cd about` | Affiche une page (remplacez `about` par son nom). |
| `cd` ou `cd ~` | Efface la sortie et affiche le message d'accueil du terminal. |
| `about` | Affiche directement une page (même principe pour les autres pages). |
| `cat about.txt` | Affiche le résumé textuel d'une page. |
| `pwd`, `whoami`, `hostname`, `date` | Affiche une information simulée ou la date actuelle. |
| `echo texte` | Réaffiche le texte fourni. |
| `fetch` ou `neofetch` | Affiche un résumé système décoratif. |
| `clear` | Efface la sortie du terminal. |

Les commandes précédentes et suivantes peuvent être retrouvées avec les flèches haut et bas du clavier. Le terminal est une interface simulée dans le navigateur ; il ne lance pas de commandes sur le système.

## Organisation des fichiers

```text
.
├── index.html
├── about.html, projects.html, skills.html, parcours.html
├── creativity.html, viginum.html, contact.html
├── style.css
├── js/
│   ├── app.js       # Initialisation, navigation et interactions du terminal
│   ├── commands.js  # Interprétation des commandes
│   ├── data.js      # Données des pages et des projets
│   ├── pages.js     # Construction et affichage du contenu des pages
│   └── system.js    # Horloge et informations du navigateur
├── archive/
│   └── mi-projet/   # Ancienne version conservée à part
└── images…
```

Pour le détail de chaque fonction JavaScript, consultez [FONCTIONS-JAVASCRIPT.md](./FONCTIONS-JAVASCRIPT.md).
