'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// Load the theme from localStorage on page load
window.onload = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        sections.forEach(section => section.classList.add('dark-mode')); // Add dark mode to sections
        isDarkMode = true;
        toggleButton.innerHTML = '<ion-icon name="moon"></ion-icon>'; // Start with moon icon
    }
};


// Load the theme from localStorage on page load
window.onload = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        isDarkMode = true;
        toggleButton.innerHTML = '<ion-icon name="moon"></ion-icon>'; // Start with moon icon
    }
};


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Simulate a delay for the loading screen
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // 2-second delay
});


document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".blue-heart");
  const quoteDisplay = document.querySelector(".quote-display");

  // List of love quotes
  const quotes = [
      "Love is not finding someone to live with; it's finding someone you can't live without.💙"];

  // Magnetic effect on mousemove
  document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const rect = heart.getBoundingClientRect();
      const heartX = rect.left + rect.width / 2;
      const heartY = rect.top + rect.height / 2;

      const distX = mouseX - heartX;
      const distY = mouseY - heartY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const attractionDistance = 130;

      if (distance < attractionDistance) {
          const moveFactor = .1;
          heart.style.transform = `translate(${distX * moveFactor}px, ${distY * moveFactor}px)`;
      } else {
          heart.style.transform = "translate(0, 0)";
      }
  });

  // Display a random quote on click
  heart.addEventListener("click", () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteDisplay.textContent = randomQuote;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Create the gradient effect element
  const gradientEffect = document.createElement("div");
  gradientEffect.classList.add("hover-gradient");
  navbar.appendChild(gradientEffect);

  // Show gradient effect on mouse move
  navbar.addEventListener("mousemove", (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position the gradient
      gradientEffect.style.left = `${x}px`;
      gradientEffect.style.top = `${y}px`;
      gradientEffect.style.opacity = 1;
  });

  // Hide gradient when mouse leaves navbar
  navbar.addEventListener("mouseleave", () => {
      gradientEffect.style.opacity = 0;
  });
});


function openModal() {
  document.getElementById("hireMeModal").style.display = "block";
  document.body.classList.add("no-scroll"); // Disable scrolling
}

function closeModal() {
  document.getElementById("hireMeModal").style.display = "none";
  document.body.classList.remove("no-scroll"); // Enable scrolling
}

// Close the modal when clicking outside it
window.onclick = function(event) {
  const modal = document.getElementById("hireMeModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); // Enable scrolling
  }
};







