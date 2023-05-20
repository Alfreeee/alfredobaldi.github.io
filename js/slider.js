const carousel = document.querySelector(".carousell");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("touchend", dragEnd);
carousel.addEventListener("mousemove", drag);
carousel.addEventListener("touchmove", drag);

function dragStart(event) {
  if (event.type === "touchstart") {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }
  isDragging = true;
  cancelAnimationFrame(animationID);
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function dragEnd() {
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < 3) {
    currentIndex += 1;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }
  setPositionByIndex();
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -carousel.offsetWidth;
  prevTranslate = currentTranslate;
  animate();
}

function animate() {
  const speed = 5; // in pixels per frame
  animationID = requestAnimationFrame(animate);
  if (Math.abs(currentTranslate - prevTranslate) >= carousel.offsetWidth) {
    prevTranslate = currentTranslate;
    cancelAnimationFrame(animationID);
  } else {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
    currentTranslate += (currentIndex * -carousel.offsetWidth - currentTranslate) / speed;
  }
}
