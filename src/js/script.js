
/*menu*/ 

const toggleOpen = document.querySelector(".menu-btn"); 
const toggleClose = document.querySelector(".header__menu"); 
const nav = document.querySelector(".headermenu");
const page = document.body;

if (toggleOpen && toggleClose && nav) {
  const toggleMenu = (isOpen) => {
    toggleOpen.ariaExpanded = isOpen;
    nav.ariaHidden = !isOpen;
    page.classList.toggle("noscroll", isOpen);
  };

  toggleOpen.addEventListener("click", () => toggleMenu(true));
  toggleClose.addEventListener("click", () => toggleMenu(false));
}

/*lightbox*/

const lightBox = document.querySelector("#lightbox");
if (lightBox) {
  const lightBoxImg = lightBox.querySelector("img");

document.body.addEventListener("click", (evt)=> {
    console.log(evt.target);

    if (evt.target.matches("[data-full-img]")) {
        lightBoxImg.src = evt.target.dataset.fullImg;
        lightBox.showModal();}
    });


 lightBox.addEventListener("click", (evt) => {
    lightBox.classList.add("sortie");
    lightBox.addEventListener("animationend", () => {
        lightBox.classList.remove("sortie");
        lightBox.close();
    }, {once: true});
});
}

document.querySelector(".button").addEventListener("click", function () {
    this.classList.toggle("clicked"); // Ajoute ou retire la classe "clicked"
});


