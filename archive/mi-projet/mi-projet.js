const output = document.querySelector("#output");
const form = document.querySelector("#command-form");
const input = document.querySelector("#command");

const pages = {
  about: [
    "À propos",
    "Je m'appelle Raphaël, étudiant en BUT Réseaux & Télécommunications.",
    "Je m'intéresse à Linux, aux réseaux et à la cybersécurité."
  ],
  projects: [
    "Mes projets",
    "raphoxrr.fr — mon site vitrine",
    "Climatometre RT — une application web que j'ai développée",
    "Mon serveur personnel"
  ],
  skills: ["Compétences", "Cette page est en cours de construction."],
  parcours: [
    "Parcours",
    "BUT Réseaux & Télécommunications — réseaux, systèmes et télécommunications."
  ],
  contact: [
    "Contact",
    "GitHub : github.com/Raphoxrr28",
    "E-mail : raphael.heitz02@edu.univ-fcomte.fr",
    "Instagram : @raph_html",
    "Site : raphoxrr.fr"
  ]
};

function printLine(text, isTitle = false) {
  const line = document.createElement("p");
  if (isTitle) line.className = "prompt";
  line.textContent = text;
  output.append(line);
}

function showPage(name) {
  if (!pages[name]) return;
  output.replaceChildren();
  pages[name].forEach((line, index) => printLine(line, index === 0));
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.dataset.page === name) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function runCommand(value) {
  const command = value.trim().toLowerCase();
  if (!command) return;

  if (command === "clear") {
    output.replaceChildren();
  } else if (command === "help") {
    printLine("[raphoxrr@archlinux ~]$ help");
    printLine("Commandes : help · ls · pwd · whoami · date · clear");
    printLine("Pages : about · projects · skills · parcours · contact");
  } else if (command === "ls") {
    printLine("[raphoxrr@archlinux ~]$ ls");
    printLine("about.txt  projects.txt  skills.txt  parcours.txt  contact.txt");
  } else if (command === "pwd") {
    printLine("[raphoxrr@archlinux ~]$ pwd");
    printLine("/home/raphoxrr");
  } else if (command === "whoami") {
    printLine("[raphoxrr@archlinux ~]$ whoami");
    printLine("raphoxrr");
  } else if (command === "date") {
    printLine(`[raphoxrr@archlinux ~]$ ${new Date().toLocaleString("fr-FR")}`);
  } else if (pages[command]) {
    showPage(command);
  } else {
    printLine(`[raphoxrr@archlinux ~]$ ${command}`);
    printLine(`Commande inconnue : ${command}. Essaie « help ».`);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runCommand(input.value);
  input.value = "";
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = link.dataset.page;
    showPage(page);
    window.history.replaceState(null, "", `#${page}`);
  });
});

document.querySelector(".identity").addEventListener("click", (event) => {
  event.preventDefault();
  showPage("home");
  window.history.replaceState(null, "", "#home");
});

const initialPage = window.location.hash.slice(1);
if (pages[initialPage]) showPage(initialPage);
