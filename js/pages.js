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
      description: "Un projet GitHub que j’ai ajouté parmi les références qui ont nourri ma démarche créative."
    },
    {
      category: "REMERCIEMENTS · LINKEDIN",
      title: "Michaël Vlesik-Schmitt — BUT MMI",
      href: "https://fr.linkedin.com/in/micha%C3%ABl-vlesik-schmitt?trk=public_post_feed-actor-image",
      description: "Le profil LinkedIn de Michaël Vlesik-Schmitt, ajouté dans mes références et remerciements."
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
      frame.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
      frame.title = sourceTitle;
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      card.append(frame);
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
          src: "2.png",
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
          src: "fichier copié.png",
          alt: "Capture de la première version codée du site, avec son terminal et sa navigation",
          caption: "Première version codée"
        },
        {
          src: "3.png",
          alt: "Maquette du rendu que je voulais obtenir pour le site",
          caption: "Rendu que je visais"
        }
      ]
    },
    {
      number: "03",
      title: "Mi-projet",
      detail:
        "Le principal problème de cette page était que son fond d’écran n’était pas libre de droits.",
      images: [
        {
          src: "image.png",
          alt: "Capture d’écran de l’étape intermédiaire du site, intitulée mi-projet",
          caption: "Mi-projet"
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
    images.forEach(({ src, alt, caption }) => {
      const figure = document.createElement("figure");
      figure.className = "creativity-journal-figure";

      const imageElement = document.createElement("img");
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

window.SitePages = {
  render(output, name) {
    const content = window.SiteData.pages[name];
    if (!content) return false;

    output.replaceChildren();
    output.classList.toggle("terminal-output--projects", name === "projects");
    output.classList.toggle("terminal-output--viginum", name === "viginum");
    output.classList.toggle("terminal-output--creativity", name === "creativity");
    if (name === "viginum") {
      output.append(createViginumArticle());
    } else if (name === "creativity") {
      output.append(createCreativityPage());
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
