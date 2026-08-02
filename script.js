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
