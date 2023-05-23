let heroImage = document.querySelector(".hero-image");

if (heroImage !== null) {
  heroImage.addEventListener("mouseenter", function () {
    heroImage.classList.add("animate");
  });

  heroImage.addEventListener("mouseleave", function () {
    heroImage.classList.remove("animate");
  });
}

const currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("current-year");
if (currentYearElement !== null) {
  currentYearElement.textContent = currentYear;
}

let magnifier = document.getElementById("custom-cursor");

if (magnifier !== null) {
  document.addEventListener("mousemove", function (e) {
    magnifier.style.left = e.pageX + "px";
    magnifier.style.top = e.pageY + "px";
    magnifier.style.backgroundPosition =
      "-" + (e.pageX - 50) + "px -" + (e.pageY - 50) + "px";

    // If the mouse is over an element, expand the magnifier
    if (document.elementFromPoint(e.clientX, e.clientY) !== document.body) {
      magnifier.style.width = "100px";
      magnifier.style.height = "100px";
    } else {
      // If the mouse is not over an element, reduce the size of the magnifier
      magnifier.style.width = "50px";
      magnifier.style.height = "50px";
    }
  });
}

$(function () {
  $("#header-placeholder").load("/header.html");
});

$(function () {
  $("#footer-placeholder").load("/footer.html");
});

alert($().jquery);
