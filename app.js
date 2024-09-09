const app = new Controller();

///////////////
const toggleHistorySidebar = document.querySelector(".sidebar-btn-history");
const historySidebar = document.querySelector(".sidebar-history");

toggleHistorySidebar.addEventListener("click", () => {
  historySidebar.classList.toggle("show");
  settingsSidebar.classList.remove("show");
});

const toggleSettingsSidebar = document.querySelector(".sidebar-btn-settings");
const settingsSidebar = document.querySelector(".sidebar-settings");

toggleSettingsSidebar.addEventListener("click", () => {
  settingsSidebar.classList.toggle("show");
  historySidebar.classList.remove("show");
});

// buttons
const numButtons = document.querySelectorAll(".btn-num");
const delBtn = document.querySelector(".btn-del");
//buttons

//inputs
const expensesInput = document.querySelector(".expenses-input");
const monthBudgetInput = document.querySelector(".budget-input");
//inputs

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (settingsSidebar.classList.contains("show")) {
      if (monthBudgetInput.value.length < 6) {
        monthBudgetInput.value += value;
      }
    } else {
      if (expensesInput.value.length < 6) {
        expensesInput.value += value;
      }
    }

    // if (expensesInput.value.length < 6) {
    //   expensesInput.value += value;
    // }
  });
});

delBtn.addEventListener("click", () => {
  if (settingsSidebar.classList.contains("show")) {
    monthBudgetInput.value = monthBudgetInput.value.slice(0, -1);
  } else {
    expensesInput.value = expensesInput.value.slice(0, -1);
  }
});
