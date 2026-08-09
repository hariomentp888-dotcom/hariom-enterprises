document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "62px";
  nav.style.right = "4%";
  nav.style.background = "#fff";
  nav.style.padding = "20px";
  nav.style.border = "1px solid #e5e7eb";
  nav.style.borderRadius = "10px";
});

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value;
  const whatsappNumber = "918871463799"; // Replace with your WhatsApp number
  const text = `Hello Hariom Enterprises,%0A%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0ARequirement: ${message}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
});
