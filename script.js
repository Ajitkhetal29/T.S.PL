//   crawsel start
let currentIndex = 0;
const slides = document.getElementById("clientImages");
if (slides){
totalSlides = slides.children.length;

}
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
  const offset = -currentIndex * 190;
  slides.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
  updateSlider();
});

let startX;

slides.addEventListener("mousedown", (e) => {
  startX = e.pageX - slides.offsetLeft;
  slides.style.cursor = "grabbing";

  const onMouseMove = (e) => {
    const x = e.pageX - slides.offsetLeft;
    const walk = x - startX;
    slides.style.transform = `translateX(${-(currentIndex * 190) + walk}px)`;
  };

  const onMouseUp = () => {
    slides.removeEventListener("mousemove", onMouseMove);
    slides.removeEventListener("mouseup", onMouseUp);
    slides.style.cursor = "grab";

    if (startX - e.pageX > 100) {
      currentIndex++;
    } else if (e.pageX - startX > 100) {
      currentIndex--;
    }

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

    updateSlider();
  };

  slides.addEventListener("mousemove", onMouseMove);
  slides.addEventListener("mouseup", onMouseUp);
});

slides.addEventListener("dragstart", (e) => e.preventDefault());

//   crawsel end


// back to top
let backtotop = document.querySelector('.back-to-top');
const navbar = document.querySelector("nav");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      console.log(true); // Debugging line
      backtotop.classList.add('active');
      navbar.classList.add('fixed-top');
    } else {
      backtotop.classList.remove('active');
      navbar.classList.remove('fixed-top');
    }
  };
  
  // Trigger on page load and scroll
  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}
// back to top

// testimonial start.
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('testimonial-list');

prev.addEventListener('click', () => {
    list.scrollLeft -= list.clientWidth;
});

next.addEventListener('click', () => {
    list.scrollLeft += list.clientWidth;
});
// testimonial end

