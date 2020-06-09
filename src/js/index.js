import css from "./estilos.css";
const API_URL = "https://dog.ceo/api/breeds/image/random";

const array_usuarios = [
  {
    auser: "a",
    apassword: "a",
  },
  {
    auser: "fulanito",
    apassword: "4321",
  },
  {
    auser: "Gustavo",
    apassword: "jaimes",
  },
];

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

function validar_usuario(usuario, password) {
  return array_usuarios.find((u) => {
    return u.auser === usuario && u.apassword === password;
  });
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = loginForm.username.value;
  const pass = loginForm.password.value;

  if (validar_usuario(usuario, pass)) {
    //alert("Entraste al sistema");
    getPerroData();
  } else {
    alert("Error de login");
  }
});

function getPerroData() {
  fetch(API_URL).then(function (response) {
    response.json().then(function (data) {
      URL = data.message;
      document.getElementById("divperro").innerHTML =
        '<img width="100" height="100" src="' + URL + '">';
    });
  });
}
