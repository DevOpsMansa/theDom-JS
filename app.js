/*Cache at least one element using querySelector or querySelectorAll.*/

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

/*== Iterate over a collection of elements to accomplish some task.==*/
// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

/*==Register at least two different event listeners and create the associated 10% event handler functions.==*/
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Assuming you have an HTML element with an id "parentElement"
var parentElement = document.getElementById("img__container");

/* === Target the first child of the parent element/ change to org after sba === */

var firstChild = parentElement.firstElementChild;
firstChild.style.background = `cyan`;

/*== Modify the style and/or CSS classes of an element in response to user 5% interactions using the style or classList properties.== uncomment this in CSS after SBA to original == */

let sign_up = document.getElementsByClassName("main__btn");

let changeColor = () => {
  sign_up[2].style.background = "Green";
};
sign_up[2].addEventListener("click", changeColor);

/*Modify the HTML or text content of at least one element in response to 10% user interaction using innerHTML, innerText, or textContent.
 */
document.addEventListener("DOMContentLoaded", function () {
  let sign_up_button = document.getElementById("sign__up");
  let description_paragraph = document.getElementById("description");

  sign_up_button.addEventListener("click", function () {
    // Modify the text content of the <p> element
    description_paragraph.textContent = "You have successfully signed up!";
  });
});


/*=== Create at least one element using createElement.
Use appendChild and/or prepend to add new elements to the DOM.===*/

document.addEventListener("", function () {
  // Create a new <a> element
  let newLink = document.createElement("a");

  // Set the href attribute and text content for the new link
  newLink.href = "/new-link";
  newLink.textContent = "New Link";

  // Get the parent element where you want to append the new link
  let footerLinks = document.getElementById("footerLinks");

  // Append the new link to the parent element
  footerLinks.appendChild(newLink);
});

/*Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. */

document.addEventListener("", function () {
  // Gets the template element
  let template = document.getElementById("template");

  // Gets the parent element to append the new links
  let footerLinks = document.getElementById("footerLinks");

  // Clone the template content
  let clonedTemplate = template.cloneNode(true);

  // Modified the cloned content
  let newLink = document.createElement("a");
  newLink.href = "/new-link";
  newLink.textContent = "New Link";

  // Append the modified element to the cloned template
  clonedTemplate.appendChild(newLink);

  // Append the entire cloned and modified template to the parent element
  footerLinks.appendChild(clonedTemplate);
});