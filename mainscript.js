const liElements = document.querySelectorAll("#carousel li");

function carousel() {
  console.log("this is my first carousel");

  for (let i = 0; i < liElements.length; i++) {
    liElements[i].classList.add("hidden");
    liElements[0].classList.remove("hidden");
  };
  liElements[0].classList.add("active");


  const nextControl = document.getElementById("control-next");
  nextControl.addEventListener(
    "click",
    nextSlide
  );

  const prevControl = document.getElementById("control-prev");
  prevControl.addEventListener(
    "click",
    prevSlide
  );

  function nextSlide() {
    const currentSlide = document.querySelectorAll(".active")[0];
    currentSlide.classList.remove("active");
    currentSlide.classList.add("hidden");
    if (currentSlide.nextElementSibling !== null) {
      currentSlide.nextElementSibling.classList.add("active");
      currentSlide.nextElementSibling.classList.remove("hidden");
    } else {
      liElements[0].classList.add("active");
      liElements[0].classList.remove("hidden");
    }
  };

  function prevSlide() {
    const currentSlide = document.querySelectorAll(".active")[0];
    currentSlide.classList.remove("active");
    currentSlide.classList.add("hidden");
    if (currentSlide.previousElementSibling !== null) {
      currentSlide.previousElementSibling.classList.add("active");
      currentSlide.previousElementSibling.classList.remove("hidden");
    } else {
      liElements[liElements.length - 1].classList.add("active");
      liElements[liElements.length - 1].classList.remove("hidden");
    }
  };

};


window.onload = carousel;
