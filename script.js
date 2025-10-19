window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const openBtns = document.querySelectorAll("button");

  // 🔹 Mostrar modal automáticamente al cargar
  // (si prefieres que se abra solo al hacer clic, te dejo esa versión más abajo)
  setTimeout(() => {
    modal.classList.add("show");
  }, 800); // aparece suavemente después de 0.8s

  // 🔹 Cerrar al hacer clic en la X
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // 🔹 Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const modalCompra = document.getElementById("modal-compra");
  const closeBtns = modalCompra.querySelector(".close");
  const openBtns = document.querySelectorAll("button");
  const tipoComprador = document.getElementById("tipo-comprador");
  const formFamilia = document.getElementById("form-familia");
  const formInstitucion = document.getElementById("form-institucion");

  // Abrir modal al hacer clic en botón "Comprar AQUÍ!!!"
  openBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes("comprar")) {
      btn.addEventListener("click", () => {
        modalCompra.classList.add("show");
      });
    }
  });

  // Cerrar modal al hacer clic en X o fuera del contenido
  closeBtns.addEventListener("click", () => modalCompra.classList.remove("show"));
  window.addEventListener("click", e => {
    if (e.target === modalCompra) modalCompra.classList.remove("show");
  });

  // Mostrar formulario según tipo de comprador
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

  // Evitar que el form se recargue al enviar (solo demostración)
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

