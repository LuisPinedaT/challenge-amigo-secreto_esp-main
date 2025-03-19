// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigoIngresado = document.getElementById("amigo").value;

  if (nombreEnBlanco()) {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(amigoIngresado);
    document.getElementById("amigo").value = "";
    listarAmigos();
  }
}

function listarAmigos() {
  let lista = document.getElementById("listaAmigos");
  let item = "";
  for (let i = 0; i < amigos.length; i++) {
    item += `<li>${amigos[i]}</li>`;
  }
  lista.innerHTML = item;
}

function nombreEnBlanco() {
  let amigoIngresado = document.getElementById("amigo").value;
  if (amigoIngresado === "") {
    return true;
  } else {
    return false;
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let numeroMaximo = amigos.length;
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo);
    let resultado = document.getElementById("resultado");
    let item = `<li>${amigos[numeroGenerado]}</li>`;
    resultado.innerHTML = item;
  }
}
