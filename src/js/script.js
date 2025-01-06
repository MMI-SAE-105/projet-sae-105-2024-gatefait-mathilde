
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
