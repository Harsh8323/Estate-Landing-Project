document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs a");
  const tabsContainer = document.querySelector(".tabs");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Move the cursor (underline)
      tabsContainer.style.setProperty("--active-tab", index);
    });
  });
});
