const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const run = () => {
  const items = document.querySelectorAll(".text-animated");
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("main-btn") ||
    e.target.classList.contains("fas") ||
    e.target.classList.contains("group-label") ||
    e.target.classList.contains("navbar-brand-text")
  ) {
    run();
  }
});

window.addEventListener("load", run);
window.addEventListener("scroll", run);
