const btn = document.getElementById("detectarBtn");
const mensaje = document.getElementById("mensaje");
const humo = document.getElementById("humo");

btn.addEventListener("click", () => {
  mensaje.textContent = "🚨 ¡Humo detectado! Wally ha activado la alarma.";
  mensaje.style.color = "#ff3d00";

  // Iniciar animación del humo
  humo.style.animation = "humo 3s ease-out infinite";
  humo.style.opacity = "1";

  // Sonido de alarma
  const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
  beep.play();

  // Detener animación después de 6 segundos
  setTimeout(() => {
    humo.style.animation = "none";
    humo.style.opacity = "0";
    mensaje.textContent = "✅ Zona segura. No hay humo detectado.";
    mensaje.style.color = "#00e676";
  }, 6000);
});
