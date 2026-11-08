(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");

  function paintTheme() {
    if (!themeBtn) return;
    var dark = root.dataset.theme === "dark";
    themeBtn.textContent = dark ? "Dark" : "Light";
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  paintTheme();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (err) {}
      paintTheme();
    });
  }

  var tape = document.getElementById("tape");
  var pause = document.getElementById("ticker-toggle");
  if (tape && pause) {
    pause.addEventListener("click", function () {
      var paused = tape.classList.toggle("is-paused");
      pause.setAttribute("aria-pressed", paused ? "true" : "false");
      pause.textContent = paused ? "Play" : "Pause";
    });
  }
})();
