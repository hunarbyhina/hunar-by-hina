// ==============================
// Hunar By Hina v3.0
// ==============================

// Smooth Scrolling
document.querySelectorAll("nav a").forEach(link => {

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
// Sticky Header
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";
        header.style.background="rgba(255,255,255,.97)";

    }else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.95)";

    }

});

// ==============================
// Fade Animation
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

document.querySelectorAll(
".card,.category-card,.contact-card,h2,p"
).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ==============================
// Scroll To Top
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==============================
// Footer Year
// ==============================

const year=document.querySelector(".year");

if(year){

    year.textContent=new Date().getFullYear();

}

// ==============================
// WhatsApp Floating Animation
// ==============================

const whatsapp=document.querySelector(".whatsapp");

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
