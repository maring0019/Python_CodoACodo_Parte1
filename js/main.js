const formulario = document.getElementById('formulario');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const mail = document.getElementById('mail');
const telefono = document.getElementById('telefono');
const consulta = document.getElementById('consulta');

formulario.addEventListener("submit", e=>{
  let ermail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let numbers = /^[0-9]+$/;
  if (firstname.value.length == 0){
    alert("El campo Nombre es obligatorio.")
    firstname.focus;
  }
  if (lastname.value.length == 0){
    alert("El campo Apellido es obligatorio.")
    lastname.focus;
  }
  if (!ermail.test(mail.value)){
    alert("El email es inválido.")
  }
  if (telefono.value.length == 0){
    alert("Ingrese un número de teléfono.")
  }
  if (!numbers.test(telefono.value)){
      alert("El campo teléfono solo acepta numeros")
  }
  if (consulta.value.length == 0){
      alert("Por favor deje la consulta o el pedido que desea realizar.")
  }
})