const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mouseenter", () => {
  heroImage.classList.add("animate");
});

heroImage.addEventListener("mouseleave", () => {
  heroImage.classList.remove("animate");
});

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
