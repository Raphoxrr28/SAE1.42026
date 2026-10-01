const output = document.querySelector("#terminal-output");
const terminal = document.querySelector(".terminal");
const terminalSite = document.querySelector("#terminal-site");
const welcomeScreen = document.querySelector("#welcome-screen");
const enterTerminal = document.querySelector("#enter-terminal");
const form = document.querySelector("#command-form");
const input = document.querySelector("#command-input");
const commandHistory = [];
let historyIndex = 0;

function addLine(text, className = "") {
  const line = document.createElement("p");
  if (className) line.className = className;
  line.textContent = text;
  output.append(line);
}

function showPage(name) {
  if (!window.SitePages.render(output, name)) return false;
  terminalSite.classList.toggle("contact-mode", name === "contact");
  terminalSite.classList.toggle("projects-mode", name === "projects");
  terminalSite.classList.toggle("skills-mode", name === "skills");
  terminalSite.classList.toggle("creativity-mode", name === "creativity");
  terminalSite.classList.toggle("viginum-mode", name === "viginum");

  document.querySelectorAll(".navigation a").forEach((link) => {
    if (link.dataset.page === name) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  return true;
}

function execute(commandText) {
  window.SiteCommands.execute(commandText, { addLine, output, showPage });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value;
  if (command.trim()) {
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    execute(command);
  }
  input.value = "";
  output.scrollTop = output.scrollHeight;
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) input.value = commandHistory[--historyIndex];
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < commandHistory.length - 1) input.value = commandHistory[++historyIndex];
    else {
      historyIndex = commandHistory.length;
      input.value = "";
    }
  }
});

terminal.addEventListener("click", (event) => {
  if (event.target !== input && !event.target.closest("a, button")) input.focus();
});

window.addEventListener("resize", window.SiteSystem.updateInfo);
document.querySelector("#year").textContent = String(new Date().getFullYear());
const welcomeYear = document.querySelector("#welcome-year");
if (welcomeYear) welcomeYear.textContent = String(new Date().getFullYear());
window.SiteSystem.updateInfo();
window.SiteSystem.updateClock();
window.setInterval(window.SiteSystem.updateClock, 1000);

const hashPage = window.location.hash.slice(1);
const initialPage = document.body.dataset.page || "home";
const requestedPage = window.SiteData.pages[hashPage] ? hashPage : initialPage;
showPage(requestedPage);
if (welcomeScreen) {
  if (window.SiteData.pages[hashPage]) {
    welcomeScreen.hidden = true;
    terminalSite.hidden = false;
  } else {
    terminalSite.hidden = true;
  }
}

enterTerminal?.addEventListener("click", () => {
  welcomeScreen.hidden = true;
  terminalSite.hidden = false;
  window.history.replaceState(null, "", "#home");
  input.focus();
});
