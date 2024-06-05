window.addEventListener("scroll", onScroll);
onScroll();

document
  .querySelectorAll(".menu ul a")
  .forEach((e) => e.setAttribute("onclick", "closeMenu()"));

function onScroll() {
  activeNavStyle(home);
  activeNavStyle(services);
  activeNavStyle(about);
  activeNavStyle(rent);
  activeNavStyle(testimonial);
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function activeNavStyle(section) {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const sectionId = section.getAttribute("id");

  const targetLine = scrollY + innerHeight / 2;

  const passedTop = targetLine >= sectionTop;
  const passedBottom = targetLine >= sectionBottom;
  const sectionBoundaries = passedTop && !passedBottom;

  const aElement = document.querySelector(`.menu ul a[href*='${sectionId}']`);

  aElement.classList.remove("active");

  if (sectionBoundaries) {
    aElement.classList.add("active");
  }
}