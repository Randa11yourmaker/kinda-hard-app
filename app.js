const toggleHistorySidebar = document.querySelector(".sidebar-btn-history");
const historySidebar = document.querySelector(".sidebar-history");

toggleHistorySidebar.addEventListener("click", () => {
  historySidebar.classList.toggle("show");
});

const toggleSettingsSidebar = document.querySelector(".sidebar-btn-settings");
const settingsSidebar = document.querySelector(".sidebar-settings");

toggleSettingsSidebar.addEventListener("click", () => {
  settingsSidebar.classList.toggle("show");
});

// buttons
const numButtons = document.querySelectorAll(".btn-num");
const delBtn = document.querySelector(".btn-del");
//buttons

//inputs
const expensesInput = document.querySelector(".expenses-input");
//inputs

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (expensesInput.value.length < 10) {
      expensesInput.value += value;
    }
  });
});

delBtn.addEventListener("click", () => {
  expensesInput.value = expensesInput.value.slice(0, -1);
});
