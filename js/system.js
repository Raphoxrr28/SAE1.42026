window.SiteSystem = {
  updateClock() {
    const clock = document.querySelector("#clock");
    clock.textContent = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
  },

  updateInfo() {
    document.querySelector("#screen-size").textContent =
      `${window.screen.width} × ${window.screen.height} (${window.devicePixelRatio}x)`;
    document.querySelector("#cpu-threads").textContent = String(navigator.hardwareConcurrency || "—");
    document.querySelector("#language").textContent = navigator.language || "fr-FR";

    const browser = document.querySelector("#browser");
    if (/Firefox/i.test(navigator.userAgent)) {
      browser.textContent = "Firefox";
    } else if (/Edg/i.test(navigator.userAgent)) {
      browser.textContent = "Microsoft Edge";
    } else if (/Chrome|Chromium/i.test(navigator.userAgent)) {
      browser.textContent = "Chromium";
    }
  }
};
