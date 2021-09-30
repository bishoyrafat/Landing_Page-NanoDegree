//scroll to top function
const scrollToTop = document.getElementById("scrollToTop");
window.onscroll = () => {
  if (window.scrollY <= 400) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
};

scrollToTop.addEventListener("click", () => {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

/*
/////////////////////////////////////////////////////////////////////////////////
*/
// global variables
const sections = Array.from(document.getElementsByTagName("section"));
const nav = document.getElementById("navbar__list");

//create dynamic navbar
for (i = 0; i < sections.length; i++) {
  let navLink = document.createElement("li");
  navLink.textContent = `section ${i + 1}`;
  navLink.setAttribute("href", `section${i + 1}`);
  navLink.setAttribute("class", "your-active-class");
  nav.appendChild(navLink);
  console.log(navLink.getAttribute("href"));
}

/*
/////////////////////////////////////////////////////////////////////////////////
*/

// scroll into section function
const navbarLinks = document.querySelectorAll("#navbar__list li");
scrollIntoSection = (e) => {
  sections.forEach((section, i) => {
    navbarLinks[i].addEventListener("click", () => {
      if (navbarLinks[i].getAttribute("href") == section.getAttribute("id")) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        e.preventDefault();
      }
    });
  });
};
scrollIntoSection();

/*
/////////////////////////////////////////////////////////////////////////////////
*/

//add active class
addActiveClass = () => {
  window.onscroll = () => {
    sections.forEach((section, i) => {
      navbarLinks[i].classList.remove("your-active-class");
      const sectionCords = section.getBoundingClientRect();
      if (sectionCords.top >= -55 && sectionCords.top <= 602) {
        {
          section.classList.add("your-active-class");
          navbarLinks[i].classList.add("your-active-class");
        }
      } else {
        section.classList.remove("your-active-class");
        navbarLinks[i].classList.remove("your-active-class");
      }
    });
  };
};
addActiveClass();

/*
/////////////////////////////////////////////////////////////////////////////////
*/

//onload function
window.onload = () => {
  scrollTo({
    left: 0,
    top: 2,
    behavior: "smooth",
  });
};
