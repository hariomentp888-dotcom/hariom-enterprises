document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
function sendWhatsApp(e){
 e.preventDefault();
 const n=document.getElementById('name').value, p=document.getElementById('product').value, q=document.getElementById('qty').value, m=document.getElementById('message').value;
 const text=`Hello Hariom Enterprises,%0A%0AName: ${encodeURIComponent(n)}%0AProduct: ${encodeURIComponent(p)}%0AQuantity/Size: ${encodeURIComponent(q)}%0ADetails: ${encodeURIComponent(m)}`;
 window.open(`https://wa.me/918871463799?text=${text}`,'_blank');
}
