/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.18
});

reveals.forEach((section) => revealObserver.observe(section));


/* ===========================
   SHOOTING STARS
=========================== */

const shootingContainer = document.getElementById("shooting-stars");

function createShootingStar() {

    if (!shootingContainer) return;

    const star = document.createElement("div");
    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "%";
    star.style.left = (70 + Math.random() * 30) + "%";

    shootingContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2500);
}

setInterval(createShootingStar, 5000);


/* ===========================
   FLOATING PARTICLES
=========================== */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 45; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        const size = Math.random() * 5 + 2;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.left = Math.random() * 100 + "vw";

        p.style.animationDuration = (12 + Math.random() * 12) + "s";
        p.style.animationDelay = Math.random() * 12 + "s";

        particleContainer.appendChild(p);

    }

}


/* ===========================
   GALLERY LIGHTBOX
=========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {

    document.querySelectorAll(".gallery img").forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}


/* ===========================
   TYPEWRITER LETTER
=========================== */

const letter = document.getElementById("letter");

const text = `If you're reading this, then I guess I finally finished the little surprise I've been secretly building.

I kept thinking there was some grand gift I was supposed to give you for one year together.

But every time I tried, I realized that the best gift I could give you was a piece of me.

So I made this.

Happy one year.

I love you.`;

if (letter) {

    let i = 0;
    let started = false;

    function typeLetter() {

        if (i < text.length) {

            letter.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeLetter, 28);

        }

    }

    const letterObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting && !started) {

            started = true;

            typeLetter();

        }

    }, {
        threshold: 0.3
    });

    letterObserver.observe(letter);

}


/* ===========================
   BEGIN BUTTON TRANSITION
=========================== */

const beginBtn = document.getElementById("beginBtn");
const transition = document.getElementById("transition");

if (beginBtn && transition) {

    beginBtn.addEventListener("click", () => {

        transition.classList.add("active");

        setTimeout(() => {

            document.getElementById("story").scrollIntoView({
                behavior: "smooth"
            });

        }, 700);

        setTimeout(() => {

            transition.classList.remove("active");

        }, 1600);

    });

}
