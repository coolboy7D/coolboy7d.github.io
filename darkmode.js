(() => {
    function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
}
function toggleDarkMode() {
    let current;
    try {
        current = localStorage.getItem("theme");
    } catch(e) {
        console.warn("localStorage unavailable", e);
        current = "light";
    }
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
        console.log("current =", current, "next =", next);
}

window.toggleDarkMode = toggleDarkMode;

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});
    window.addEventListener("storage", (event) => {
        if (event.key === "theme") {
            applyTheme(event.newValue);
        }
    });
})();
