// ==============================
// Hunar By Hina v7.0
// ==============================

// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    // Toggle menu
    menuToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");

    });

    // Close when a menu link is clicked
    document.querySelectorAll("#navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    // Prevent clicks inside menu from closing it
    navbar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener("click", () => {

        if (navbar.classList.contains("active")) {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==============================
// HEADER
// ==============================

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > 60){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        header.style.background = "rgba(255,255,255,.97)";

    }else{

        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.05)";
        header.style.background = "rgba(255,255,255,.92)";

    }

    if(currentScroll > lastScroll && currentScroll > 100){

        header.classList.add("hide");

    }else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

// ==============================
// FADE ANIMATION
// ==============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.category-card,.contact-card,h2,p").forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

if(topBtn){

    topBtn.onclick = ()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    };

}

// ==============================
// FOOTER YEAR
// ==============================

const year = document.querySelector(".year");

if(year){

    year.textContent = new Date().getFullYear();

}

// ==============================
// WHATSAPP ANIMATION
// ==============================

const whatsapp = document.querySelector(".whatsapp");

if(whatsapp){

    setInterval(()=>{

        whatsapp.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.12)"},
            {transform:"scale(1)"}

        ],{

            duration:600

        });

    },3500);

}

// ==============================
// IMAGE VIEWER
// ==============================

function openImage(src){

    const viewer = document.getElementById("imageViewer");
    const image = document.getElementById("largeImage");
    const download = document.getElementById("downloadImage");

    viewer.style.display = "flex";

    image.src = src;

    download.href = src;

    download.download = src.split("/").pop();

}

function closeImage(){

    document.getElementById("imageViewer").style.display = "none";

}

document.getElementById("imageViewer")?.addEventListener("click", function(e){

    if(e.target.id === "imageViewer"){

        closeImage();

    }

});
