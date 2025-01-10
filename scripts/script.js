// Zoek de menu-button op
const deButton = document.querySelector("nav button");
const deNav = document.querySelector("nav");

// Toggle menu
deButton.addEventListener("click", () => {
    const isOpen = deNav.classList.toggle("toonMenu");
    deButton.setAttribute("aria-expanded", isOpen);
});

// Sluit menu met Escape
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        deNav.classList.remove("toonMenu");
        deButton.setAttribute("aria-expanded", false);
    }
});
