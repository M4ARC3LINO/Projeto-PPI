let chatAtual = "geral";

const usuario = localStorage.getItem("logado");
if (!usuario) {
  window.location.href = "index.html";
}

if (!localStorage.getItem("geral")) {
  localStorage.setItem("geral", JSON.stringify([
    { user: "Lorelai", texto: "Olá pessoal!" },
    { user: "joão", texto: "Bem-vindos ao chat da turma" }
  ]));
}

if (!localStorage.getItem("projeto")) {
  localStorage.setItem("projeto", JSON.stringify([
    { user: "Tina", texto: "Alguém já começou o trabalho?" },
    { user: "Joana", texto: "Vamos dividir as tarefas" }
  ]));
}

function trocarChat(chat) {
  chatAtual = chat;

  document.getElementById("titulo-chat").innerText =
    chat === "geral" ? "Chat Geral" : "Chat Projeto";

  carregarMensagens();
}

function enviarMensagem() {
  const msg = document.getElementById("msg").value;

  if (msg.trim() === "") return;

  const mensagens = JSON.parse(localStorage.getItem(chatAtual)) || [];

  mensagens.push({
    user: usuario,
    texto: msg
  });

  localStorage.setItem(chatAtual, JSON.stringify(mensagens));

  document.getElementById("msg").value = "";
  carregarMensagens();
}

function carregarMensagens() {
  const caixa = document.getElementById("chat-box");
  caixa.innerHTML = "";

  const mensagens = JSON.parse(localStorage.getItem(chatAtual)) || [];

  mensagens.forEach(m => {
    caixa.innerHTML += `<p><b>${m.user}:</b> ${m.texto}</p>`;
  });
}

carregarMensagens();

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}