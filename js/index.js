document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const link = document.querySelectorAll(".mobile-menu a");
  const body = document.body;

  console.log(link);

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    mobileMenu.classList.toggle("mobile-menu--active");
    body.classList.toggle("lock");
  });

  mobileMenu.addEventListener("click", (event) => {
    console.log(event.target);

    if (event.target.classList.contains("header__nav-link")) {
      burger.classList.remove("burger--active");
      mobileMenu.classList.remove("mobile-menu--active");
      body.classList.remove("lock");
    }
  });
});
