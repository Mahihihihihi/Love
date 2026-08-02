document.querySelectorAll('section').forEach(s=>s.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
/* ---------- Shooting Stars ---------- */

const shootingContainer = document.getElementById("shooting-stars");

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*40+"%";

star.style.left=(70+Math.random()*30)+"%";

shootingContainer.appendChild(star);

setTimeout(()=>star.remove(),2500);

}

setInterval(createShootingStar,5000);

/* ---------- Floating Particles ---------- */

const particleContainer=document.getElementById("particles");

for(let i=0;i<45;i++){

const p=document.createElement("div");

p.className="particle";

const size=Math.random()*5+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(12+Math.random()*12)+"s";

p.style.animationDelay=Math.random()*12+"s";

particleContainer.appendChild(p);

}
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

};

});

lightbox.onclick=()=>{

lightbox.classList.remove("active");

};
const text=`If you're reading this, then I guess I finally finished the little surprise I've been secretly building.

I kept thinking there was some grand gift I was supposed to give you for one year together.

But every time I tried, I realized that the best gift I could give you was a piece of me.

So I made this.

Happy one year.

I love you.`;

const letter=document.getElementById("letter");

let i=0;

function typeLetter(){

if(i<text.length){

letter.innerHTML+=text.charAt(i);

i++;

setTimeout(typeLetter,28);

}

}

const observer=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

typeLetter();

observer.disconnect();

}

});

observer.observe(letter);
