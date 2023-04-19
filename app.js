// Función para encriptar el texto
function encryptText() {
  const originalText = document.getElementById("originalText").value;
  let encryptedText = originalText;
  encryptedText = encryptedText.replace(/e/g, "enter");
  encryptedText = encryptedText.replace(/i/g, "imes");
  encryptedText = encryptedText.replace(/a/g, "ai");
  encryptedText = encryptedText.replace(/o/g, "ober");
  encryptedText = encryptedText.replace(/u/g, "ufat");
  document.getElementById("resultText").innerText = encryptedText;
  limpiar();
  quitarMensajes();
}

// Función para desencriptar el texto
function decryptText() {
  const originalText = document.getElementById("originalText").value;
  let decryptedText = originalText;
  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");
  document.getElementById("resultText").innerText = decryptedText;
  limpiar();
  quitarMensajes();
}
// Función para copiar el texto encriptado o desencriptado al portapapeles
function copyToClipboard() {
  const resultText = document.getElementById("resultText").innerText;
  navigator.clipboard
    .writeText(resultText)
    .then(() => {
      console.log("Texto copiado al portapapeles: " + resultText);
    })
    .catch((error) => {
      console.error("Error al copiar al portapapeles:", error);
    });
    // ** cambiar estilos del boton
  copyBtn.innerText = 'Texto copiado :D'
  setTimeout(() => {
    copyBtn.innerText = 'Copiar'
    copyBtn.classList.add('botonCopied')
  }, 1000)
}

// Asignar los eventos a los botones
document.getElementById("encryptBtn")?.addEventListener("click", encryptText);
document.getElementById("decryptBtn")?.addEventListener("click", decryptText);
document.getElementById("copyBtn")?.addEventListener("click", copyToClipboard);

//Función que inicializa el valor del texto inicial como vacío
function limpiar() {
  originalText.value = "";
}

//Función que oculta la caja de los mensajes de advertencia
function quitarMensajes() {
  document.getElementById("cajaMensajes").style.display = "none";
}
