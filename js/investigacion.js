document.addEventListener("DOMContentLoaded", function () {
//obteniendo elementos del dom
const email = document.getElementById("idEmail");
const pass = document.getElementById("idPass");
const btn = document.getElementById("idBtn");
const reqLargo = document.getElementById("reqLargo");
const reqMayus = document.getElementById("reqMayus");
const reqNum = document.getElementById("reqNum");

//expresiones regulares
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexLargo = /.{8,}/;
const regexMayus = /[A-Z]/;
const regexNum = /[0-9]/;

const validarFormulario = function () {
//evaluamos correo con .test()
let correoValido = regexEmail.test(email.value.trim());

//evaluamos la contraseña con .test() de las 3 restricciones
let largoValido = regexLargo.test(pass.value);
let mayusValido = regexMayus.test(pass.value);
let numValido = regexNum.test(pass.value);

//color de los label de texto
reqLargo.className = largoValido ? "text-success fw-bold" : "text-danger";
reqMayus.className = mayusValido ? "text-success fw-bold" : "text-danger";
reqNum.className = numValido ? "text-success fw-bold" : "text-danger";

//se habilita el boton de acceso si todo esta bien
if (correoValido && largoValido && mayusValido && numValido) {
    btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "true");
    }
};

//escucha cada tecla digitada en los campos del form
email.addEventListener("input", validarFormulario);
pass.addEventListener("input", validarFormulario);

//al hacer clic cuando está habilitado muestra el mensaje final
btn.addEventListener("click", function () {
alert("Se ha ingresado con éxito al sistema!!!");
});
});