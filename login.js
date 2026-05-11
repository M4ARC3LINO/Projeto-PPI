const usuarios = [
  { user: "mimmarcelo", senha: "Teste123" },
  { user: "Lorelai", senha: "Lore@09" },
  { user: "João", senha: "poderosas34" },
  { user: "Tina", senha: "!087*253" },
  { user: "Joana", senha: "@@1joaninha" }
];

function login() {
  const u = document.getElementById("user").value;
  const s = document.getElementById("senha").value;

  const valido = usuarios.find(x => x.user === u && x.senha === s);

  if (valido) {
    localStorage.setItem("logado", u);
    window.location.href = "chat.html";
  } else {
    alert("Login inválido");
  }
}