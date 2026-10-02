function createContactCard({ iconText, labelText, valueText, href, ariaLabel }) {
  const card = document.createElement("a");
  card.className = "contact-card";
  card.href = href;
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", ariaLabel);
  if (href.startsWith("https://")) card.target = "_blank";

  const icon = document.createElement("span");
  icon.className = "contact-card-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = iconText;

  const details = document.createElement("span");
  details.className = "contact-card-details";

  const label = document.createElement("span");
  label.className = "contact-card-label";
  label.textContent = labelText;

  const value = document.createElement("span");
  value.className = "contact-card-username";
  value.textContent = valueText;
  details.append(label, value);

  const arrow = document.createElement("span");
  arrow.className = "contact-card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = href.startsWith("mailto:") ? "✉" : "↗";
  card.append(icon, details, arrow);
  return card;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = project.category;

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;
  card.append(category, title, description);

  if (project.url && project.action) {
    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = project.action;
    link.setAttribute("aria-label", `${project.action} : ${project.title}`);
    card.append(link);
  }

  return card;
}

function createViginumSection({ eyebrow, title, paragraphs, bullets }) {
  const section = document.createElement("section");
  section.className = "viginum-section";

  const label = document.createElement("p");
  label.className = "viginum-eyebrow";
  label.textContent = eyebrow;

  const heading = document.createElement("h2");
  heading.textContent = title;
  section.append(label, heading);

  paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    section.append(paragraph);
  });

  if (bullets?.length) {
    const list = document.createElement("ul");
    bullets.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });
    section.append(list);
  }

  return section;
}

function createViginumArticle() {
  const article = document.createElement("article");
  article.className = "viginum-article";
  article.setAttribute("aria-label", "Exposé sur VIGINUM");

  const intro = document.createElement("header");
  intro.className = "viginum-intro";

  const kicker = document.createElement("p");
  kicker.className = "viginum-kicker";
  kicker.textContent = "SERVICE DE L’ÉTAT · SGDSN";

  const title = document.createElement("h1");
  title.textContent = "Protéger le débat public numérique";

  const lead = document.createElement("p");
  lead.className = "viginum-lead";
  lead.textContent =
    "VIGINUM est le service de vigilance et de protection contre les ingérences numériques étrangères. Sa mission est de repérer et d’analyser les opérations qui cherchent à manipuler l’information en ligne et à peser sur le débat public en France.";
  intro.append(kicker, title, lead);

  const facts = document.createElement("div");
  facts.className = "viginum-facts";
  [
    ["2021", "année de création"],
    ["SGDSN", "rattaché au Secrétariat général de la défense"],
    ["Défensive", "une mission de protection"]
  ].forEach(([value, caption]) => {
    const fact = document.createElement("div");
    fact.className = "viginum-fact";
    const strong = document.createElement("strong");
    strong.textContent = value;
    const text = document.createElement("span");
    text.textContent = caption;
    fact.append(strong, text);
    facts.append(fact);
  });

  const overview = createViginumSection({
    eyebrow: "01 / LE CONTEXTE",
    title: "Pourquoi ce service existe-t-il ?",
    paragraphs: [
      "Les réseaux sociaux et les plateformes en ligne sont devenus des espaces importants d’information et de discussion. Des acteurs étrangers peuvent tenter d’y intervenir de façon coordonnée et trompeuse afin d’amplifier certains récits, de créer de la confusion ou d’attiser des divisions.",
      "Face à cette menace, l’État s’est doté d’une capacité spécialisée d’observation de l’espace numérique. VIGINUM a été créé le 13 juillet 2021 et est rattaché au Secrétariat général de la défense et de la sécurité nationale (SGDSN)."
    ]
  });

  const missions = document.createElement("section");
  missions.className = "viginum-section";
  const missionEyebrow = document.createElement("p");
  missionEyebrow.className = "viginum-eyebrow";
  missionEyebrow.textContent = "02 / SES MISSIONS";
  const missionTitle = document.createElement("h2");
  missionTitle.textContent = "Observer, comprendre, éclairer";
  missions.append(missionEyebrow, missionTitle);

  const missionGrid = document.createElement("div");
  missionGrid.className = "viginum-mission-grid";
  [
    {
      number: "01",
      title: "Détecter",
      description: "Repérer des activités numériques suspectes susceptibles de relever d’une opération d’ingérence étrangère."
    },
    {
      number: "02",
      title: "Caractériser",
      description: "Analyser les modes opératoires, les contenus, leur diffusion et les indices permettant d’en comprendre l’origine et les objectifs."
    },
    {
      number: "03",
      title: "Protéger",
      description: "Apporter une expertise à l’État pour contribuer à la protection du débat public numérique et à la compréhension de la menace."
    }
  ].forEach(({ number, title: mission, description }) => {
    const card = document.createElement("article");
    card.className = "viginum-mission-card";
    const index = document.createElement("span");
    index.className = "viginum-mission-number";
    index.textContent = number;
    const heading = document.createElement("h3");
    heading.textContent = mission;
    const text = document.createElement("p");
    text.textContent = description;
    card.append(index, heading, text);
    missionGrid.append(card);
  });
  missions.append(missionGrid);

  const method = createViginumSection({
    eyebrow: "03 / LA DÉMARCHE",
    title: "Comment se déroule l’analyse ?",
    paragraphs: [
      "Le travail repose sur l’observation de phénomènes visibles dans l’espace numérique et sur le recoupement d’indices. Un contenu isolé ou une opinion controversée ne suffit pas à caractériser une ingérence : l’analyse porte sur un ensemble d’éléments et sur la manière dont une activité est organisée et amplifiée."
    ],
    bullets: [
      "Observer des comportements et des campagnes coordonnées en ligne.",
      "Croiser les contenus, les comptes, les temporalités et les modes de diffusion.",
      "Évaluer si les éléments réunis correspondent au cadre d’une ingérence numérique étrangère.",
      "Documenter les constats afin d’éclairer l’action des autorités compétentes."
    ]
  });

  const distinction = document.createElement("aside");
  distinction.className = "viginum-note";
  const distinctionTitle = document.createElement("h2");
  distinctionTitle.textContent = "À ne pas confondre";
  const distinctionText = document.createElement("p");
  distinctionText.textContent =
    "VIGINUM n’a pas pour rôle de trancher les débats d’opinion ni de surveiller les citoyens pour leurs idées. Son champ porte sur des opérations numériques étrangères et des manœuvres coordonnées susceptibles de porter atteinte au débat public.";
  distinction.append(distinctionTitle, distinctionText);

  const framework = createViginumSection({
    eyebrow: "04 / LE CADRE",
    title: "Un service inscrit dans l’action de l’État",
    paragraphs: [
      "VIGINUM fait partie du dispositif national de lutte contre les manipulations de l’information. Son travail s’inscrit dans un cadre juridique et institutionnel défini par les textes officiels.",
      "La page institutionnelle du SGDSN indique que le décret n° 2026-70 du 11 février 2026 renforce les missions du service. Pour le détail des compétences applicables, il convient de se reporter au texte officiel."
    ]
  });

  const sources = document.createElement("footer");
  sources.className = "viginum-sources";
  const sourcesTitle = document.createElement("h2");
  sourcesTitle.textContent = "Sources officielles";
  const sourceList = document.createElement("ul");
  [
    {
      text: "SGDSN — VIGINUM",
      href: "https://www.sgdsn.gouv.fr/viginum"
    },
    {
      text: "Légifrance — rechercher le décret n° 2026-70 du 11 février 2026",
      href: "https://www.legifrance.gouv.fr/search/all?query=d%C3%A9cret%202026-70%20VIGINUM"
    }
  ].forEach(({ text, href }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = text;
    item.append(link);
    sourceList.append(item);
  });
  sources.append(sourcesTitle, sourceList);

  article.append(intro, facts, overview, missions, method, distinction, framework, sources);
  return article;
}

function createCreativityPage() {
  const article = document.createElement("article");
  article.className = "creativity-article";
  article.setAttribute("aria-label", "Références et journal de bord");

  const sourcesSection = document.createElement("section");
  sourcesSection.className = "creativity-section";
  const sourcesKicker = document.createElement("p");
  sourcesKicker.className = "creativity-kicker";
  sourcesKicker.textContent = "RÉFÉRENCES";
  const sourcesTitle = document.createElement("h2");
  sourcesTitle.textContent = "Mes références";

  const sourceList = document.createElement("div");
  sourceList.className = "creativity-source-grid";
  const videoList = document.createElement("div");
  videoList.className = "creativity-source-grid creativity-video-grid";
  [
    {
      category: "ARTICLE · FREECODECAMP",
      title: "How to Create an Interactive Terminal Portfolio Website",
      href: "https://www.freecodecamp.org/news/how-to-create-an-interactive-terminal-portfolio-website/#heading-what-is-jquery-terminal",
      description: "Un tutoriel qui m’a aidé à découvrir comment créer un portfolio interactif inspiré d’un terminal."
    },
    {
      category: "PROJET · GITHUB",
      title: "Terminal Portfolio — Sat Naing",
      href: "https://github.com/satnaing/terminal-portfolio",
      description: "Un exemple de portfolio-terminal qui m’a inspiré pour l’apparence et la navigation de mon site."
    },
    {
      category: "ARTICLE · MEDIUM",
      title: "Linux Style Portfolio",
      href: "https://medium.com/@edchokr/linux-style-portfolio-6c706507c603",
      description: "Un article autour des portfolios au style Linux, proche de l’univers visuel que je voulais créer."
    },
    {
      category: "COURS · MMI",
      title: "Cours de mon professeur de MMI (2024)",
      href: "http://courslehmann.free.fr/",
      description: "Le site de cours de mon professeur de MMI, que j’avais consulté pendant mes cours en 2024."
    },
    {
      category: "PROJET · GITHUB",
      title: "Serpantinum",
      href: "https://github.com/ilyamiro/serpantinum",
      description: "Serpantinum est mon gestionnaire de fenêtres au quotidien sur mon ordinateur. C’est en l’utilisant que mes premières idées pour l’ambiance et l’interface de ce site ont commencé à émerger."
    },
    {
      category: "REMERCIEMENTS · LINKEDIN",
      title: "Michaël Vlesik-Schmitt — BUT MMI",
      href: "https://fr.linkedin.com/in/micha%C3%ABl-vlesik-schmitt?trk=public_post_feed-actor-image",
      description: "Michaël est un ami que je me suis fait en MMI en 2024. Il m’a énormément aidé à construire les pages JavaScript de ce site, et je tiens à le remercier pour son aide."
    },
    {
      category: "VIDÉO · YOUTUBE",
      title: "Arch Linux + Hyprland rice setup",
      href: "https://www.youtube.com/watch?v=NrRVr-kysko",
      videoId: "NrRVr-kysko"
    },
    {
      category: "VIDÉO · YOUTUBE",
      title: "caelestia-shell — Linux Arch Desktop",
      href: "https://www.youtube.com/watch?v=TggHDm0_vBw",
      videoId: "TggHDm0_vBw"
    }
  ].forEach(({ category, title: sourceTitle, href, videoId, description }) => {
    const card = document.createElement(videoId ? "article" : "a");
    card.className = "creativity-source-card";
    if (card instanceof HTMLAnchorElement) {
      card.classList.add("creativity-source-card--flip");
      card.href = href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute(
        "aria-label",
        `${sourceTitle}. ${description} Ouvrir la ressource dans un nouvel onglet.`
      );
    } else {
      card.classList.add("creativity-source-card--video");
    }

    const front = document.createElement("div");
    front.className = "creativity-source-front";
    front.setAttribute("aria-hidden", "true");

    const sourceCategory = document.createElement("span");
    sourceCategory.className = "creativity-source-category";
    sourceCategory.textContent = category;

    const heading = document.createElement("h3");
    heading.textContent = sourceTitle;

    if (videoId) {
      card.append(sourceCategory, heading);
      const frame = document.createElement("iframe");
      frame.className = "creativity-video";
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
      embedUrl.searchParams.set("origin", window.location.origin);
      embedUrl.searchParams.set("widget_referrer", window.location.href);
      frame.src = embedUrl.toString();
      frame.title = sourceTitle;
      frame.loading = "lazy";
      frame.referrerPolicy = "origin";
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      const videoLink = document.createElement("a");
      videoLink.className = "creativity-source-action";
      videoLink.href = href;
      videoLink.target = "_blank";
      videoLink.rel = "noopener noreferrer";
      videoLink.textContent = "Regarder sur YouTube";
      videoLink.setAttribute("aria-label", `Regarder ${sourceTitle} sur YouTube`);
      card.append(frame, videoLink);
    } else {
      front.append(sourceCategory, heading);
      const back = document.createElement("div");
      back.className = "creativity-source-back";
      back.setAttribute("aria-hidden", "true");
      back.textContent = description;
      const action = document.createElement("span");
      action.className = "creativity-source-action";
      action.textContent = "Consulter la ressource";
      back.append(action);
      const inner = document.createElement("div");
      inner.className = "creativity-source-card-inner";
      inner.append(front, back);
      card.append(inner);
    }
    (videoId ? videoList : sourceList).append(card);
  });
  sourcesSection.append(sourcesKicker, sourcesTitle, sourceList, videoList);

  const journalSection = document.createElement("section");
  journalSection.className = "creativity-section creativity-journal";

  const journalKicker = document.createElement("p");
  journalKicker.className = "creativity-kicker";
  journalKicker.textContent = "JOURNAL DE BORD";

  const journalTitle = document.createElement("h2");
  journalTitle.textContent = "De la première idée à la première version";

  const journalEntries = document.createElement("div");
  journalEntries.className = "creativity-journal-entries";

  [
    {
      number: "01",
      title: "La première idée sur Canva",
      detail:
        "J’ai d’abord imaginé le site sous forme de maquette sur Canva. Cette première piste m’a permis de poser l’ambiance visuelle et l’organisation générale avant de commencer à coder.",
      images: [
        {
          src: "../images/2.png",
          alt: "Première maquette du site personnel réalisée sur Canva",
          caption: "Maquette Canva"
        }
      ]
    },
    {
      number: "02",
      title: "Une première version en code",
      detail:
        "J’ai ensuite créé une première version fonctionnelle en HTML, CSS et JavaScript : une navigation simple, un terminal interactif et les premières pages du site.",
      note: "J’ai voulu poursuivre le projet en TypeScript, mais cela dépassait mes compétences à ce moment-là.",
      images: [
        {
          src: "../images/fichier copié.png",
          alt: "Capture de la première version codée du site, avec son terminal et sa navigation",
          caption: "Première version codée"
        },
        {
          src: "../images/3.png",
          alt: "Maquette du rendu que je voulais obtenir pour le site",
          caption: "Rendu que je visais"
        }
      ]
    },
    {
      number: "03",
      title: "Mi-projet",
      detail:
        "La plupart des fonctionnalités du site étaient déjà en place, mais aucune page n’était encore réalisée.",
      images: [
        {
          src: "../images/image.png",
          alt: "Capture d’écran de l’étape intermédiaire du site, intitulée mi-projet",
          caption: "Mi-projet",
          blurred: true
        }
      ]
    }
  ].forEach(({ number, title: entryTitle, detail, note, images }) => {
    const entry = document.createElement("article");
    entry.className = "creativity-journal-entry";

    const entryNumber = document.createElement("span");
    entryNumber.className = "creativity-journal-number";
    entryNumber.textContent = number;

    const content = document.createElement("div");
    content.className = "creativity-journal-content";

    const heading = document.createElement("h3");
    heading.textContent = entryTitle;

    const description = document.createElement("p");
    description.textContent = detail;

    const noteParagraph = document.createElement("p");
    noteParagraph.className = "creativity-journal-note";
    noteParagraph.textContent = note || "";

    const imageList = document.createElement("div");
    imageList.className = "creativity-journal-images";
    images.forEach(({ src, alt, caption, blurred }) => {
      const figure = document.createElement("figure");
      figure.className = "creativity-journal-figure";

      const imageElement = document.createElement("img");
      if (blurred) imageElement.classList.add("creativity-journal-image--blurred");
      imageElement.src = src;
      imageElement.alt = alt;
      imageElement.loading = "lazy";

      const imageCaption = document.createElement("figcaption");
      imageCaption.textContent = caption;
      figure.append(imageElement, imageCaption);
      imageList.append(figure);
    });

    content.append(heading, description);
    if (note) content.append(noteParagraph);
    content.append(imageList);
    entry.append(entryNumber, content);
    journalEntries.append(entry);
  });

  journalSection.append(journalKicker, journalTitle, journalEntries);
  article.append(sourcesSection, journalSection);
  return article;
}

function createSkillsPage() {
  const article = document.createElement("article");
  article.className = "skills-article";
  article.setAttribute("aria-label", "Compétences personnelles et jeux vidéo");

  const videoSection = document.createElement("section");
  videoSection.className = "skills-video-section";
  videoSection.setAttribute("aria-labelledby", "skills-video-title");

  const videoHeading = document.createElement("div");
  videoHeading.className = "skills-section-heading";
  const videoKicker = document.createElement("p");
  videoKicker.className = "skills-kicker";
  videoKicker.id = "skills-video-title";
  videoKicker.textContent = "COMPÉTENCES";
  videoHeading.append(videoKicker);

  const video = document.createElement("video");
  video.className = "skills-video-player";
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.setAttribute("aria-label", "Vidéo de compétences");
  const videoSource = document.createElement("source");
  videoSource.src = "../images/document_5906585659937659980.mp4";
  videoSource.type = "video/mp4";
  video.append(videoSource);

  const scrollLink = document.createElement("a");
  scrollLink.className = "skills-scroll-link";
  scrollLink.href = "#skills-games";
  scrollLink.setAttribute("aria-label", "Découvrir mes compétences personnelles liées aux jeux vidéo");
  scrollLink.textContent = "↓";
  videoSection.append(videoHeading, video, scrollLink);

  const gamesSection = document.createElement("section");
  gamesSection.className = "skills-games-section";
  gamesSection.id = "skills-games";
  gamesSection.setAttribute("aria-labelledby", "skills-games-title");

  const gamesTitle = document.createElement("h2");
  gamesTitle.id = "skills-games-title";
  gamesTitle.textContent = "Ce que les jeux vidéo m’apportent";
  const gamesIntro = document.createElement("p");
  gamesIntro.className = "skills-games-intro";
  gamesIntro.textContent =
    "Les jeux vidéo sont pour moi plus qu’un loisir : ils m’aident à développer des qualités que je retrouve aussi dans mes projets et dans le travail en équipe.";

  const skillsGrid = document.createElement("div");
  skillsGrid.className = "skills-personal-grid";
  [
    {
      title: "Réflexion stratégique",
      description: "Analyser la partie et adapter mes décisions au contexte.",
      examples: [
        ["League of Legends", "En midlane avec Yone, Akali ou Ahri, je regarde la position du jungler adverse et l’état de ma vague avant de tenter un trade ou de partir aider une autre lane."],
        ["Overwatch", "Avec Mei, je peux isoler un adversaire avec son mur au moment où mon équipe engage. Avec Widowmaker ou Hanzo, je cherche une ligne de vue utile sans rester exposé au même endroit."],
        ["Valorant", "Avec Jett, je peux utiliser ma mobilité pour prendre une position puis me replier. Avec Raze, je garde mes satchels pour entrer sur le site ou déloger un adversaire."],
        ["Fortnite", "Mon expérience compétitive m’a appris à choisir mes rotations, gérer mes ressources et prendre des décisions rapidement en fin de partie. J’ai atteint les demi-finales des FNCS du Chapitre 2, saison 5."]
      ]
    },
    {
      title: "Esprit d’équipe",
      description: "Communiquer et coordonner mes actions pour atteindre un objectif commun.",
      examples: [
        ["League of Legends", "En midlane, j’annonce les disparitions de mon adversaire et je préviens mon jungler avant de préparer un contrôle avec le charme d’Ahri ou l’engagement de Yone."],
        ["Overwatch", "Avec Mei, je peux couper la retraite adverse avec mon mur quand l’équipe attaque. Avec Widowmaker ou Hanzo, je communique les cibles repérées pour aider mes alliés à engager."],
        ["Valorant", "Avec Jett ou Raze, je préviens l’équipe avant d’entrer sur le site et je pars au moment où mes coéquipiers lancent leurs utilitaires, afin qu’ils puissent suivre et échanger."],
        ["Fortnite", "En compétition, communiquer les adversaires repérés, les ressources disponibles et la rotation prévue aide toute l’équipe à avancer ensemble et à éviter les décisions isolées."]
      ]
    },
    {
      title: "Persévérance",
      description: "Apprendre de mes erreurs, ajuster mon jeu et rester concentré malgré les difficultés.",
      examples: [
        ["League of Legends", "Si ma lane se passe mal avec Yone, Akali ou Ahri, j’évite de répéter les trades perdants : je sécurise les sbires, demande de l’aide et attends une occasion plus sûre pour revenir."],
        ["Overwatch", "Si je me fais souvent repérer avec Widowmaker ou Hanzo, je change d’angle après un tir. Si une Mei adverse bloque mon équipe, je garde mes distances et cherche une autre entrée."],
        ["Valorant", "Si mes entrées avec Jett ou Raze échouent, je change de timing ou de trajectoire et je me coordonne davantage avec les utilitaires de l’équipe au lieu de recommencer seul."],
        ["Fortnite", "Après plusieurs années de jeu compétitif, j’ai appris à analyser mes erreurs, m’entraîner et m’adapter sous pression. Atteindre les demi-finales des FNCS du Chapitre 2, saison 5 a marqué ce parcours."]
      ]
    }
  ].forEach(({ title, description, examples }) => {
    const card = document.createElement("article");
    card.className = "skills-personal-card";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const text = document.createElement("p");
    text.textContent = description;

    const gameExamples = document.createElement("div");
    gameExamples.className = "skills-game-examples";
    examples.forEach(([game, example]) => {
      const details = document.createElement("details");
      details.className = "skills-game-example";
      const summary = document.createElement("summary");
      summary.textContent = game;
      const explanation = document.createElement("p");
      explanation.textContent = example;
      details.append(summary, explanation);
      gameExamples.append(details);
    });

    card.append(heading, text, gameExamples);
    skillsGrid.append(card);
  });

  const gamesGallery = document.createElement("section");
  gamesGallery.className = "skills-games-gallery";
  gamesGallery.setAttribute("aria-label", "Captures d’écran des jeux vidéo");
  const screenshots = document.createElement("div");
  screenshots.className = "skills-screenshot-grid";
  [
    { number: "01", image: "../images/lol.png", alt: "Capture d’écran de League of Legends" },
    { number: "02", image: "../images/ow.png", alt: "Capture d’écran d’Overwatch" }
  ].forEach(({ number, image, alt }) => {
    const card = document.createElement("article");
    card.className = "skills-game-card";
    if (image) {
      const screenshot = document.createElement("img");
      screenshot.className = "skills-game-screenshot";
      screenshot.src = image;
      screenshot.alt = alt;
      screenshot.loading = "lazy";
      card.append(screenshot);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "skills-game-screenshot-placeholder";
      placeholder.setAttribute("role", "img");
      placeholder.setAttribute("aria-label", `Emplacement pour une capture du jeu ${number}`);
      const label = document.createElement("span");
      label.textContent = "Capture à ajouter";
      placeholder.append(label);
      card.append(placeholder);
    }
    screenshots.append(card);
  });
  gamesGallery.append(screenshots);

  const clipsSection = document.createElement("section");
  clipsSection.className = "skills-clips-section";
  clipsSection.setAttribute("aria-label", "Clips de gameplay");
  const clipsGrid = document.createElement("div");
  clipsGrid.className = "skills-clips-grid";
  [
    { number: "01", videoId: "TGJcoJb65Dk", title: "4 jett ult CLIP" },
    { number: "02", videoId: "4Ffq9sWEKYc", title: "Clip de gameplay" }
  ].forEach(({ number, videoId, title }) => {
    const card = document.createElement("article");
    card.className = "skills-clip-card";
    if (videoId) {
      if (window.location.protocol === "file:") {
        const message = document.createElement("p");
        message.className = "skills-game-clip-notice";
        message.textContent = "Pour lire le clip intégré, ouvre le site avec Live Server.";
        card.append(message);
      } else {
        const frame = document.createElement("iframe");
        frame.className = "skills-game-clip";
        frame.src = `https://www.youtube.com/embed/${videoId}`;
        frame.title = title;
        frame.loading = "lazy";
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.allowFullscreen = true;
        card.append(frame);
      }
      const videoLink = document.createElement("a");
      videoLink.className = "skills-game-clip-link";
      videoLink.href = `https://youtu.be/${videoId}`;
      videoLink.target = "_blank";
      videoLink.rel = "noopener noreferrer";
      videoLink.textContent = "Regarder sur YouTube";
      card.append(videoLink);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "skills-game-clip-placeholder";
      placeholder.setAttribute("role", "img");
      placeholder.setAttribute("aria-label", `Emplacement pour un clip de gameplay ${number}`);
      const label = document.createElement("span");
      label.textContent = "Clip de gameplay à ajouter";
      placeholder.append(label);
      card.append(placeholder);
    }
    clipsGrid.append(card);
  });
  clipsSection.append(clipsGrid);

  gamesSection.append(gamesTitle, gamesIntro, skillsGrid, gamesGallery, clipsSection);
  article.append(videoSection, gamesSection);
  return article;
}

window.SitePages = {
  render(output, name) {
    const content = window.SiteData.pages[name];
    if (!content) return false;

    output.replaceChildren();
    output.classList.toggle("terminal-output--projects", name === "projects");
    output.classList.toggle("terminal-output--viginum", name === "viginum");
    output.classList.toggle("terminal-output--creativity", name === "creativity");
    output.classList.toggle("terminal-output--skills", name === "skills");
    if (name === "viginum") {
      output.append(createViginumArticle());
    } else if (name === "creativity") {
      output.append(createCreativityPage());
    } else if (name === "skills") {
      output.append(createSkillsPage());
    } else {
    content.forEach((line, index) => {
      const paragraph = document.createElement("p");
      if (index === 0) paragraph.className = "page-title";
      paragraph.textContent = line;
      output.append(paragraph);
    });
    }

    if (name === "projects") {
      const grid = document.createElement("div");
      grid.className = "project-grid";
      window.SiteData.projects.forEach((project) => grid.append(createProjectCard(project)));
      output.append(grid);
    }

    if (name === "contact") {
      const cards = document.createElement("div");
      cards.className = "contact-cards";
      cards.append(
        createContactCard({
          iconText: "GH",
          labelText: "GITHUB",
          valueText: "Raphoxrr28",
          href: "https://github.com/Raphoxrr28",
          ariaLabel: "Voir le profil GitHub de Raphoxrr28"
        }),
        createContactCard({
          iconText: "@",
          labelText: "E-MAIL UNIVERSITAIRE",
          valueText: "raphael.heitz02@edu.univ-fcomte.fr",
          href: "mailto:raphael.heitz02@edu.univ-fcomte.fr",
          ariaLabel: "Envoyer un e-mail à raphael.heitz02@edu.univ-fcomte.fr"
        }),
        createContactCard({
          iconText: "IG",
          labelText: "INSTAGRAM",
          valueText: "raph_html",
          href: "https://www.instagram.com/raph_html/",
          ariaLabel: "Voir le profil Instagram raph_html"
        }),
        createContactCard({
          iconText: "WEB",
          labelText: "SITE WEB",
          valueText: "raphoxrr.fr",
          href: "https://raphoxrr.fr",
          ariaLabel: "Visiter le site raphoxrr.fr"
        })
      );
      output.append(cards);
    }

    return true;
  }
};
