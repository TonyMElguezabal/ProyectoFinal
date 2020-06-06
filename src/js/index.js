import css from "./estilos.css";
const array_usuarios = [
  {
    auser: "Antonio",
    apassword: "1234",
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
    alert("Entraste al sistema");
    console.log("Ya entro al sistema");
  } else {
    alert("Error de login");
  }
});
