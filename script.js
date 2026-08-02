document.querySelectorAll('section').forEach(s=>s.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));