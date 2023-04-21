
let form = document.querySelector(".form__container");
let arrow = document.querySelector(".arrow-down");



function openForm() {
     arrow.classList.toggle('active');

    if (form.classList.contains("is-hidden")) {
        form.classList.remove("is-hidden");
    } else {
        form.classList.add("is-hidden");
    }

    
}


arrow.addEventListener("click", openForm);



document.querySelector(".btn--close").addEventListener("click", function(){ 
        form.classList.add("is-hidden");
        arrow.classList.remove('active');
});



let navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const currentLink = e.target;
      const target = document.getElementById(currentLink.dataset.target);
      navLinks.forEach(link => {
        if (link !== currentLink) {
          link.classList.remove("nav__link--active");
        }
      });
      currentLink.classList.add("nav__link--active");
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });