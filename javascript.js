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


function cargarProductos() {
  const tableBody = document.querySelector(".body");

  placasDeVideo.forEach((placa) => {
    tableBody.innerHTML += `<tr>
            <td>${placa.id}</td>
            <td>${placa.fabricante}</td>
            <td>${placa.marca}</td>
            <td>${placa.modelo}</td>
            <td>${placa.memoria}</td>
            <td>${placa.precio}</td>
            <td><button class="eliminar">Eliminar elemento</button></td>
        </tr>`;
  });
}


function eliminarElem() {
  const buttons = document.querySelectorAll(".eliminar");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Seguro que querés eliminar este elemento?",
          text: "No podrás revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminarlo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        })
        .then((result) => {
        result.isConfirmed ? 
            (swalWithBootstrapButtons.fire(
              "Listo!",
              "El elemento ha sido eliminado!",
              "success"
            )) :
        result.dismiss === Swal.DismissReason.cancel 
            (swalWithBootstrapButtons.fire(
              "Eso estuvo cerca!",
              "Tu placa de video imaginaria está a salvo! :)",
              "error"
            ));
        });
    });
  });
}

cargarProductos();
eliminarElem();



// function quitarPais() {
//   debugger
//   let aQuitar= prompt('ingrese el país a quitar')
//   let indice=paises.indexOf(aQuitar)
//   if (indice !== -1) {
//       let resultado = paises.splice(indice, 1)
//       console.warn('Se ha eliminado el pais ', aQuitar)
//   } else {
//       console.error ('No se ha encontrado el país', aQuitar)
//   }
// }