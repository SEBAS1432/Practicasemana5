// Mostrar ventana emergente
document.getElementById("abrirVentana").addEventListener("click", () => {
  document.getElementById("ventanaCupon").style.display = "block";
});

// Cerrar ventana emergente
document.getElementById("cerrarVentana").addEventListener("click", () => {
  document.getElementById("ventanaCupon").style.display = "none";
});

// Validar cupón al hacer clic
document.getElementById("aplicarCupon").addEventListener("click", () => {
  const cupon = document.getElementById("inputCupon").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensajeCupon");

  if (cupon === "hombre15") {
    mensaje.innerHTML = "Cupón válido: 15% de descuento en HOMBRES.";
    mensaje.style.color = "green";
  } else if (cupon === "mujer20") {
    mensaje.innerHTML = "Cupón válido: 20% de descuento en MUJERES.";
    mensaje.style.color = "green";
  } else {
    mensaje.innerHTML = "Cupón no válido.";
    mensaje.style.color = "red";
    return;
  }

  // Condición adicional por compras mayores
  setTimeout(() => {
    alert("¡Por compras mayores a $300 tienes 10% extra de descuento!");
  }, 1000);
});

// Detectar cambio con onchange
function detectarCambio() {
  const cupon = document.getElementById("inputCupon").value;
  console.log("Cambio detectado. Nuevo valor:", cupon);
}

// Validar cupón con prompt (extra)
function validarPrompt() {
  const codigo = prompt("Introduce tu código de cupón:");
  if (codigo === "hombre15" || codigo === "mujer20") {
    alert("✅ Cupón válido: " + codigo);
  } else {
    alert("❌ Cupón no válido.");
  }
}

// Hacer ventana movible
const ventana = document.getElementById("ventanaCupon");
const moverVentana = document.getElementById("moverVentana");

let offsetX = 0, offsetY = 0, isDragging = false;

moverVentana.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - ventana.offsetLeft;
  offsetY = e.clientY - ventana.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    ventana.style.left = `${e.clientX - offsetX}px`;
    ventana.style.top = `${e.clientY - offsetY}px`;
    ventana.style.transform = "none";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
