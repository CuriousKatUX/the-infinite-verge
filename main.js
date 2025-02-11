document.addEventListener("DOMContentLoaded", () => {
    // Smooth page transition effect
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease-in-out";
        document.body.style.opacity = "1";
    }, 100);

    // Navigation Buttons
    const enterButton = document.getElementById("enterButton");
    const proceedButton = document.getElementById("proceedButton");
    const exploreButton = document.getElementById("exploreButton");
    const archiveButton = document.getElementById("archiveButton");
    const manifestoButton = document.getElementById("manifestoButton");
    const returnButton = document.getElementById("returnButton");

    if (enterButton) {
        enterButton.addEventListener("click", () => transitionPage("home.html"));
    }

    if (proceedButton) {
        proceedButton.addEventListener("click", () => transitionPage("next_level.html"));
    }

    if (exploreButton) {
        exploreButton.addEventListener("click", () => transitionPage("archive.html"));
    }

    if (archiveButton) {
        archiveButton.addEventListener("click", () => transitionPage("archive.html"));
    }

    if (manifestoButton) {
        manifestoButton.addEventListener("click", () => transitionPage("manifesto.html"));
    }

    if (returnButton) {
        returnButton.addEventListener("click", () => transitionPage("index.html"));
    }

    // Function to transition between pages
    function transitionPage(targetURL) {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = targetURL;
        }, 1000);
    }

    // Ambient Sound
    const ambientSound = document.getElementById("ambientSound");
    if (ambientSound) {
        setTimeout(() => {
            ambientSound.volume = 0.5;
            ambientSound.play();
        }, 1000);
    }

    // Portal & Gateway Effects
    const portal = document.querySelector(".portal");
    if (portal) {
        portal.addEventListener("mouseover", () => {
            portal.style.transform = "scale(1.3)";
            portal.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
        });

        portal.addEventListener("mouseleave", () => {
            portal.style.transform = "scale(1)";
            portal.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.3)";
        });
    }
});
