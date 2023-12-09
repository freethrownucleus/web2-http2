document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("section img");
  const title = document.querySelector("header h1");
  const footer = document.querySelector("footer p");

  images.forEach((image) => {
    image.addEventListener("click", rotateImage);
  });

  title.addEventListener("click", toggleMessage);

  function rotateImage(event) {
    const clickedImage = event.target;
    clickedImage.classList.toggle("rotated");
  }

  function toggleMessage() {
    const titleSpan = title.querySelector("span");
  
    if (titleSpan.textContent === "HTTP2") {
      titleSpan.textContent = "Ovo je 5. projekt iz kolegija Napredni razvoj programske potpore za web.";
      footer.style.display = "none";
    } else {
      titleSpan.textContent = "HTTP2";
      footer.style.display = "block";
    }
  }
  
});
