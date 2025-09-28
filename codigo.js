// Relación de país -> bandera (puedes ir agregando más)
const banderas = {
  antybarb: "https://www.banderas-mundo.es/data/flags/h160/ag.webp",
  ar: "https://flagcdn.com/w320/ar.png",
};

// Referencias a selects e imágenes
const selectIzq = document.getElementById("select-izq");
const selectDer = document.getElementById("select-der");
const imgIzq = document.getElementById("bandera-izq");
const imgDer = document.getElementById("bandera-der");

// Cuando cambie la opción del select izquierdo
selectIzq.addEventListener("change", () => {
  const pais = selectIzq.value;
  imgIzq.src = banderas[pais];
});

// Cuando cambie la opción del select derecho
selectDer.addEventListener("change", () => {
  const pais = selectDer.value;
  imgDer.src = banderas[pais];
});
