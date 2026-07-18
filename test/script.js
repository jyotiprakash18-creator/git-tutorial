document.addEventListener("DOMContentLoaded", () => {
    // Fade in the page
    document.body.classList.add("loaded");

    // Button interaction
    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert("☕ Welcome to Brew Haven!\n\nOur menu is coming soon.");
        });
    }

    // Update footer year automatically
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} Brew Haven. All Rights Reserved.`;
    }
});