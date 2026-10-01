window.SiteCommands = {
  execute(commandText, { addLine, output, showPage }) {
    const command = commandText.trim();
    if (!command) return;

    const [name, ...args] = command.split(/\s+/);
    const argument = args.join(" ");
    const { pages, files } = window.SiteData;

    if (name === "clear") {
      output.replaceChildren();
      return;
    }

    addLine(`[raphoxrr@archlinux ~]$ ${command}`, "command-line");

    if (name === "help") {
      addLine("Commandes : ls · cd · pwd · cat · echo · whoami · hostname · date · fetch · neofetch · clear");
      addLine("Pages : home · projects · skills · creativity · parcours · viginum · contact");
    } else if (name === "ls") {
      addLine(files.join("   "));
    } else if (name === "pwd") {
      addLine("/home/raphoxrr");
    } else if (name === "whoami") {
      addLine("raphoxrr");
    } else if (name === "hostname") {
      addLine("archlinux");
    } else if (name === "date") {
      addLine(new Date().toString());
    } else if (name === "echo") {
      addLine(argument);
    } else if (name === "cd" && pages[argument]) {
      showPage(argument);
    } else if (name === "cd" && (!argument || argument === "~")) {
      output.replaceChildren();
      addLine("Bienvenue sur mon site. Tape « help » pour afficher les commandes.");
    } else if (name === "cat") {
      const pageName = argument.replace(/\.txt$/, "");
      if (!pages[pageName]) addLine(`cat: ${argument || "fichier"} : fichier introuvable`);
      else pages[pageName].forEach((line) => addLine(line));
    } else if (pages[name]) {
      showPage(name);
    } else if (name === "fetch" || name === "neofetch") {
      addLine("raphoxrr@archlinux");
      addLine("───────────────");
      addLine("OS: Linux");
      addLine(`Shell: site-web ${new Date().getFullYear()}`);
      addLine(`Résolution: ${window.screen.width} × ${window.screen.height}`);
    } else {
      addLine(`${name}: commande introuvable. Essaie « help ».`);
    }
  }
};
