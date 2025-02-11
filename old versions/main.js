
document.addEventListener("DOMContentLoaded", () => {
    // Smooth page transition effect
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease-in-out";
        document.body.style.opacity = "1";
    }, 100);

    // Function to transition between pages with smooth fade-out
    function transitionPage(targetURL) {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = targetURL;
        }, 1000);
    }

    // Page Navigation Buttons
    const buttons = {
        enterButton: "pages/home.html",
        proceedButton: "pages/next_level.html",
        exploreButton: "pages/archive.html",
        archiveButton: "pages/archive.html",
        manifestoButton: "pages/manifesto.html",
        returnButton: "../index.html"
    };

    Object.keys(buttons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => transitionPage(buttons[buttonId]));
        }
    });

    // Ambient Sound Handling
    const ambientSound = document.getElementById("ambientSound");
    if (ambientSound) {
        setTimeout(() => {
            ambientSound.volume = 0.5;
            ambientSound.play();
        }, 1000);
    }

    // Portal & Gateway Hover Effects
    const interactiveElements = {
        portal: "scale(1.3)",
        gateway: "scale(1.2)"
    };

    Object.keys(interactiveElements).forEach(elementId => {
        const element = document.querySelector(`.${elementId}`);
        if (element) {
            element.addEventListener("mouseover", () => {
                element.style.transform = interactiveElements[elementId];
                element.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
            });

            element.addEventListener("mouseleave", () => {
                element.style.transform = "scale(1)";
                element.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.3)";
            });
        }
    });

    // Adaptive Background Animation (Mouse Movement)
    document.body.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth) - 0.5;
        const y = (event.clientY / window.innerHeight) - 0.5;
        document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    });
});
