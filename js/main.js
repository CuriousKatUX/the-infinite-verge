document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enterButton");
    const container = document.querySelector(".container");

    enterButton.addEventListener("click", () => {
        container.style.opacity = "0";
        container.style.transform = "scale(1.1)";
        setTimeout(() => {
            window.location.href = "pages/home.html"; // Redirect to main content
        }, 1000);
    });

    // Add a subtle background animation effect
    document.body.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth) - 0.5;
        const y = (event.clientY / window.innerHeight) - 0.5;
        document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    });
});