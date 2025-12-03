// Contraseña correcta
    const correctPassword = "Erick&EsbeidyXsiempre";

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