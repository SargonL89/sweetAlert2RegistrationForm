function clickEvent() {
  const registro = document.querySelector(".registrar");
  registro.addEventListener("click", () => {
    aceptarRegistro();
  });
}

function aceptarRegistro() {
  const usuario = document.querySelector(".usuario").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".contraseña").value;

  const regExUser = /^[a-zA-Z0-9]{4,16}$/;
  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  regExUser.test(usuario) &&
  regExEmail.test(email) &&
  regExPassword.test(password)
    ? Swal.fire({
        icon: "success",
        title: `Excelente, ${usuario}!`,
        text: "Tu registro se ha completado exitosamente!",
      })
    : !regExUser.test(usuario)
    ? Swal.fire({
        icon: "error",
        title: "Nombre de usuario inválido",
        text: "El nombre de usuario debe contener entre 4 a 16 caracteres y no incluir espacios en blanco",
      })
    : !regExEmail.test(email)
    ? Swal.fire({
        icon: "error",
        title: "E-mail inválido",
        text: "Introduce un e-mail válido",
      })
    : !regExPassword.test(password)
    ? Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        text: "La contraseña debe contener al menos un dígito, una letra minúscula, una mayúscula y estar formada por al menos 8 caracteres",
      })
    : Swal.fire({
        icon: "error",
        title: "No pudimos completar el registro",
        text: "Se produjo un error inesperado",
      });
}

clickEvent();

