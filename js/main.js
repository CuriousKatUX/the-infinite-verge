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

document.addEventListener("DOMContentLoaded", () => {
    const proceedButton = document.getElementById("proceedButton");
    const portal = document.querySelector(".portal");
    const ambientSound = document.getElementById("ambientSound");

    // Delay ambient sound for a smoother effect
    setTimeout(() => {
        ambientSound.volume = 0.5;
        ambientSound.play();
    }, 1000);

    // Animate the portal when hovered over
    portal.addEventListener("mouseover", () => {
        portal.style.transform = "scale(1.3)";
        portal.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
    });

    portal.addEventListener("mouseleave", () => {
        portal.style.transform = "scale(1)";
        portal.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.3)";
    });

    // Navigate deeper into The Verge
    proceedButton.addEventListener("click", () => {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "next_level.html"; // Placeholder for next phase
        }, 1000);
    });
});
