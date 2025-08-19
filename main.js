 const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });