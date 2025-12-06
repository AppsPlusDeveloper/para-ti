let textos = document.querySelectorAll('.texto-item');
let indice = 0;

setInterval(() => {
  textos[indice].classList.remove('activo');
  indice = (indice + 1) % textos.length;
  //Tiempo de transición 3.5 segundos
  textos[indice].classList.add('activo');
}, 3500);

// Contraseña correcta
    const correctPassword = "SoyLaMasHermosa";

    // Mostrar input
    document.getElementById("password-dialog").style.display = "flex";
    document.getElementById("page-content").style.display = "none";

    function checkPassword() {
      const passwordInput = document.getElementById("password");
      const password = passwordInput.value;
      if (password === correctPassword) {
        document.getElementById("password-dialog").style.display = "none";
        document.getElementById("page-content").style.display = "block";
      } else {
      
        // Acceso denegado
        document.getElementById("error-message").innerText = "Contraseña incorrecta";
      }
    }
    
    function checkPassword(event) {
  event.preventDefault();
  
  // Evita que se recargue la página
  
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  if (password === correctPassword) {
    document.getElementById("password-dialog").style.display = "none";
    document.getElementById("page-content").style.display = "block";
  } else {
  
    // Acceso denegado
    document.getElementById("error-message").innerText = "Contraseña incorrecta";
  }
}
