window.addEventListener("DOMContentLoaded", () => {

  /* ================== Modal Oferta Principal ================== */
  const modalOferta = document.getElementById("modal");
  const closeOferta = modalOferta.querySelector(".close");

  // Mostrar modal de oferta al cargar
  setTimeout(() => {
    modalOferta.classList.add("show");
  }, 800);

  // Cerrar modal de oferta
  closeOferta.addEventListener("click", () => modalOferta.classList.remove("show"));
  window.addEventListener("click", e => {
    if (e.target === modalOferta) modalOferta.classList.remove("show");
  });

  /* ================== Modal Compra con formulario ================== */
  const modalCompra = document.getElementById("modal-compra");
  const closeCompra = modalCompra.querySelector(".close");
  const botonesCompra = document.querySelectorAll(".btn-compra");
  const tipoComprador = document.getElementById("tipo-comprador");
  const formFamilia = document.getElementById("form-familia");
  const formInstitucion = document.getElementById("form-institucion");

  // Abrir modal de compra al hacer clic en cualquier botón de compra
  botonesCompra.forEach(btn => {
    btn.addEventListener("click", () => {
      modalCompra.classList.add("show");
      // Reset del formulario al abrir
      tipoComprador.value = "";
      formFamilia.style.display = "none";
      formInstitucion.style.display = "none";
    });
  });

  // Cerrar modal de compra
  closeCompra.addEventListener("click", () => modalCompra.classList.remove("show"));
  window.addEventListener("click", e => {
    if (e.target === modalCompra) modalCompra.classList.remove("show");
  });

  // Mostrar formulario según selección
  tipoComprador.addEventListener("change", () => {
    if (tipoComprador.value === "familia") {
      formFamilia.style.display = "flex";
      formInstitucion.style.display = "none";
    } else if (tipoComprador.value === "institucion") {
      formInstitucion.style.display = "flex";
      formFamilia.style.display = "none";
    } else {
      formFamilia.style.display = "none";
      formInstitucion.style.display = "none";
    }
  });

  // Evitar recarga de página al enviar formularios (solo demostración)
  formFamilia.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Formulario de familia enviado!");
    modalCompra.classList.remove("show");
  });

  formInstitucion.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Formulario de institución enviado!");
    modalCompra.classList.remove("show");
  });

});
