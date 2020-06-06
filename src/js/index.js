import css from "./estilos.css";
const usuarios = [
  {
    user: "Antonio",
    password: "1234",
  },
];

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = loginForm.username.value;
  const pass = loginForm.password.value;

  if (usuario === "user" && pass === "web_dev") {
    alert("Entraste al sistema");
    console.log("Ya entro al sistema");
  } else {
    alert("Error de login");
  }
});
