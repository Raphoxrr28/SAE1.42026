# Guide du JavaScript

Ce guide présente les scripts du site principal, puis l'ancien script conservé dans `archive/mi-projet/`.

## Sommaire

- [Fonctionnement général](#fonctionnement-général)
- [Scripts du site principal](#scripts-du-site-principal)
  - [`data.js`](#jsdatajs--données)
  - [`system.js`](#jssystemjs--informations-système)
  - [`pages.js`](#jspagesjs--affichage-des-pages)
  - [`commands.js`](#jscommandsjs--commandes-du-terminal)
  - [`app.js`](#jsappjs--initialisation-et-interactions)
- [Ancienne version](#ancienne-version-archivée)

## Fonctionnement général

Les pages chargent les scripts avec `defer`, dans cet ordre :

1. `data.js` prépare les données.
2. `system.js` fournit les fonctions d'informations système.
3. `pages.js` construit les contenus.
4. `commands.js` interprète les commandes.
5. `app.js` relie les scripts à la page et aux interactions.

Les scripts principaux communiquent au moyen de `window.SiteData`, `window.SiteSystem`, `window.SitePages` et `window.SiteCommands`.

## Scripts du site principal

### `js/data.js` — Données

Ce fichier ne contient pas de fonction. Il définit `window.SiteData` :

| Donnée | Rôle |
| --- | --- |
| `pages` | Résumés textuels des pages, notamment utilisés par `cat`. |
| `projects` | Informations qui alimentent les cartes de projets. |
| `files` | Liste de fichiers fictifs affichée par `ls`. |

### `js/system.js` — Informations système

Les méthodes de `window.SiteSystem` mettent à jour l'horloge et la barre d'informations.

| Fonction | Rôle |
| --- | --- |
| `updateClock()` | Affiche l'heure locale au format français, avec les secondes. |
| `updateInfo()` | Affiche la résolution, le facteur d'échelle, la langue, le nombre de threads et le navigateur détecté. |

### `js/pages.js` — Affichage des pages

Ces fonctions construisent les éléments HTML des pages à l'aide de l'API DOM.

| Fonction | Rôle |
| --- | --- |
| `createContactCard(...)` | Crée une carte de contact avec son icône, son libellé, sa valeur et son lien. |
| `createProjectCard(project)` | Crée une carte de projet et ajoute son lien si une URL et une action sont définies. |
| `createViginumSection(...)` | Crée une section éditoriale avec titre, paragraphes et liste à puces facultative. |
| `createViginumArticle()` | Assemble l'article VIGINUM : introduction, faits, missions, méthode, cadre et sources. |
| `createCreativityPage()` | Construit les références, les vidéos intégrées et le journal de bord illustré. Les cartes de référence affichent leur explication au verso au survol ou au focus clavier. |
| `SitePages.render(output, name)` | Vide la sortie et affiche la page demandée. Renvoie `false` si le nom de page est inconnu, sinon `true`. |

Les contenus textuels sont ajoutés avec `textContent`. Les listes de données (paragraphes, missions, images et projets) sont parcourues pour créer les éléments correspondants.

### `js/commands.js` — Commandes du terminal

| Fonction | Rôle |
| --- | --- |
| `SiteCommands.execute(commandText, callbacks)` | Analyse et exécute la commande saisie. Utilise les fonctions de rappel fournies par `app.js` pour afficher du texte ou changer de page. |

Commandes gérées : `help`, `ls`, `cd`, `cat`, `echo`, `pwd`, `whoami`, `hostname`, `date`, `fetch`, `neofetch` et `clear`. Le nom d'une page peut aussi être saisi directement. Une commande non reconnue affiche un message d'erreur.

### `js/app.js` — Initialisation et interactions

#### Fonctions

| Fonction | Rôle |
| --- | --- |
| `addLine(text, className)` | Ajoute une ligne de texte à la sortie du terminal. |
| `showPage(name)` | Demande à `SitePages.render()` d'afficher la page et met à jour les styles et l'état du menu. |
| `execute(commandText)` | Transmet la commande et les fonctions nécessaires à `SiteCommands.execute()`. |

#### Événements et initialisation

| Événement / action | Comportement |
| --- | --- |
| Envoi du formulaire | Exécute la commande, la conserve dans l'historique et fait défiler la sortie vers le bas. |
| Flèches haut et bas | Parcourent l'historique des commandes dans le champ de saisie. |
| Clic dans le terminal | Replace le focus sur le champ de commande, sauf si le clic vise un lien ou un bouton. |
| Changement de page | Met à jour `aria-current` sur le lien de navigation correspondant. |
| Chargement de la page | Initialise l'année, l'heure et les informations système, puis choisit la page initiale depuis l'URL ou `data-page`. |
| Clic sur le bouton d'accueil | Affiche le terminal, met l'URL à jour et donne le focus au champ de commande. |

## Ancienne version archivée

[`archive/mi-projet/mi-projet.js`](./archive/mi-projet/mi-projet.js) est un ancien prototype indépendant. Il n'est pas utilisé par les pages du site principal.

| Fonction | Rôle |
| --- | --- |
| `printLine(text, isTitle)` | Ajoute une ligne à la sortie du terminal archivé. |
| `showPage(name)` | Affiche le texte d'une page connue et met à jour le menu. |
| `runCommand(value)` | Traite les commandes prises en charge par l'ancien prototype : `clear`, `help`, `ls`, `pwd`, `whoami`, `date` et les noms de pages. |

Le prototype contient également des gestionnaires d'événements pour la soumission du formulaire, les liens de navigation et le retour à l'accueil. Son fragment d'URL permet de sélectionner la page initiale.
