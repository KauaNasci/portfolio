//MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


//TEMA CLARO/ESCURO
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateIcon() {
  const isDark = document.body.classList.contains("dark");
  themeIcon.src = isDark ? "imagens/sol.png" : "imagens/lua.png";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});

updateIcon();


//FORMULÁRIO
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  msg.textContent = "";
  msg.style.color = "red";

  if (!nome || !email || !mensagem) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  if (nome.length < 2) {
    msg.textContent = "Digite um nome válido.";
    return;
  }

  if (!emailRegex.test(email)) {
    msg.textContent = "Digite um e-mail válido.";
    return;
  }

  if (mensagem.length < 10) {
    msg.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Mensagem enviada com sucesso!";

  form.reset();

  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
});
