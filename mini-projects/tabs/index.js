const tabs = document.querySelectorAll("[data-section-target]");
const contentSections = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const targetSection = document.querySelector(tab.dataset.sectionTarget);
    // disabling "active" class in all the sections
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });
    // disabling "selected" class in all the tabs
    tabs.forEach((liTab) => {
      liTab.classList.remove("selected");
    });
    // adding "active" class to a specific section based on tab clicked
    targetSection.classList.add("active");
    // adding "selected" class to a specific content based on the tab clicked
    tab.classList.add("selected");
  });
});
