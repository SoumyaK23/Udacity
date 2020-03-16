/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let topNav = navbar.offsetTop;
let navList  = document.querySelector("#navbar__list");
let sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Functions
 * 
*/

/* Method that builds navigation menu dynamically as an unordered list
When clicking an item from the navigation menu, the link scrolls to the appropriate section */

 function buildNav(sections) {
    for (const section of sections) {
        let navLinkName = section.getAttribute("data-nav");
        let sectionId = section.getAttribute("id");
        const navHtml = `<li id="#${sectionId}"><a href="#${sectionId}" class="menu__link">${navLinkName}</a></li>`;
        navList.insertAdjacentHTML("beforeend", navHtml);
    }
} 

// Method that keeps navigation menu fixed while scrolling

function topNavFixed() {
  if (window.pageYOffset >= topNav) {
    navList.classList.add("topNav")
  } else {
    navList.classList.remove("topNav");
  }
}

/* Method that returns the size of an element and its position relative to the viewport.
    Used to highlight section being viewed while scrolling through the page.
    Inspired by: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect */

function isActiveSection(element) {
    let domReact = element.getBoundingClientRect();
    return (
        domReact.top >= 0 &&
        domReact.left >= 0 &&
        domReact.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        domReact.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Functions
 * Begin Events
 * 
*/

// Building navigation menu when page loads

document.addEventListener("DOMContentLoaded", function() {
  buildNav(sections);
});

// Fix navigation menu while scrolling

window.onscroll = function() {this.topNavFixed()};

//  add Styling for active states displayed on scrolling

window.addEventListener("scroll", () => {
    sections.forEach((section)=> { 
        if (isActiveSection(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});





