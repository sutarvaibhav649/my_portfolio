document.addEventListener("DOMContentLoaded", function () {
    const roles = [
        "Java Developer",
        "Python Developer",
        "Flutter Developer",
        "AI/ML Enthusiast",
        "Data Analyst"
    ];

    let i = 0;
    let j = 0;
    let currentRole = "";
    let isDeleting = false;
    const speed = 120;
    const pauseTime = 1000;

    function typeEffect() {
        const target = document.getElementById("typing-text");

        if (!target) return;

        if (!isDeleting && j <= roles[i].length) {
            currentRole = roles[i].substring(0, j++);
            target.textContent = currentRole;
        } else if (isDeleting && j >= 0) {
            currentRole = roles[i].substring(0, j--);
            target.textContent = currentRole;
        }

        if (j === roles[i].length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
            return;
        } else if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }

        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    typeEffect();
});
