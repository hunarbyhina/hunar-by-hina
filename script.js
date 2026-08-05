// ==============================
// Hunar By Hina v2.0
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

// Header Shadow

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";
        header.style.background="rgba(255,255,255,.97)";

    }else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.95)";

    }

});

// Fade Animation

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".card,.gallery img,.contact-box div")
.forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ==============================
// LIGHTBOX
// ==============================

const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

const lightbox = document.createElement("div");
lightbox.className="lightbox";

lightbox.innerHTML=`

<span class="close">&times;</span>

<img src="" alt="">

<div class="counter"></div>

<div class="lightbox-controls">

<button id="prevBtn">⟨ Previous</button>

<a id="downloadBtn" download>⬇ Download</a>

<button id="nextBtn">Next ⟩</button>

</div>

`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

const counter = lightbox.querySelector(".counter");

const closeBtn = lightbox.querySelector(".close");

const downloadBtn = document.getElementById("downloadBtn");

function showImage(index){

    currentIndex=index;

    lightbox.classList.add("active");

    lightboxImg.src=images[index].src;

    downloadBtn.href=images[index].src;

    counter.innerHTML=(index+1)+" / "+images.length;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        showImage(index);

    });

});

closeBtn.onclick=()=>{

    lightbox.classList.remove("active");

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

};
// ==============================
// Previous / Next Buttons
// ==============================

document.getElementById("prevBtn").onclick = () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

};

document.getElementById("nextBtn").onclick = () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage(currentIndex);

};

// ==============================
// Keyboard Controls
// ==============================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowLeft"){

        document.getElementById("prevBtn").click();

    }

    if(e.key==="ArrowRight"){

        document.getElementById("nextBtn").click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

// ==============================
// Swipe Support
// ==============================

let startX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    startX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].screenX;

    let distance = endX - startX;

    if(Math.abs(distance) > 70){

        if(distance > 0){

            document.getElementById("prevBtn").click();

        }else{

            document.getElementById("nextBtn").click();

        }

    }

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==============================
// Footer Year
// ==============================

const footerYear = document.querySelector("footer .year");

if(footerYear){

    footerYear.textContent = new Date().getFullYear();

}

// ==============================
// Floating WhatsApp Animation
// ==============================

const whatsapp = document.querySelector(".whatsapp");

if(whatsapp){

    setInterval(()=>{

        whatsapp.style.transform = "scale(1.1)";

        setTimeout(()=>{

            whatsapp.style.transform = "scale(1)";

        },300);

    },3000);

}