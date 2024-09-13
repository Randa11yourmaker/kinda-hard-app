class View {
  constructor({ onBudgetAdd, onExpenseAdd }) {
    this.budgetNode = document.querySelector("#budget-node");
    this.expensesNode = document.querySelector("#expense-node");
    this.dailyBudgetNode = document.querySelector("#daily-budget-node");
    this.remainingDailyBudgetNode = document.querySelector(
      "#remaining-daily-budget-node"
    );

    this.expenseInputNode = document.querySelector(".expenses-input");
    this.budgetInputNode = document.querySelector(".budget-input");
    this.btnAddNode = document.querySelector(".btn-enter");

    this.btnAddNode.addEventListener("click", this.handleBtnAddClick);

    this.onBudgetAdd = onBudgetAdd;
    this.onExpenseAdd = onExpenseAdd;
  }

  renderBudget(budget, dailyBudget, remainingDailyBudget) {
    this.budgetNode.innerHTML = "";
    this.dailyBudgetNode.innerHTML = "";
    this.remainingDailyBudgetNode.innerHTML = "";

    this.budgetNode.innerHTML = `
      <p class="available-budget">${budget} на 30 дней</p>
    `;
    this.dailyBudgetNode.innerHTML = `
      <p id="daily-budget-node" class="daily-budget">${dailyBudget} в день</p>
    `;
    this.remainingDailyBudgetNode.innerHTML = `
      <p id="remaining-daily-budget-node" class="daily-budget-remaining">
        ${remainingDailyBudget}
      </p>
    `;
  }

  renderExpenses(expenses, remainingDailyBudget) {
    this.expensesNode.innerHTML = "";
    this.remainingDailyBudgetNode.innerHTML = "";

    expenses.reverse().forEach((expense) => {
      this.expensesNode.innerHTML += `
      <div class="expense">
        <h2 class="expense-amount">-${expense}</h2>
        <p class="expense-day">${this.getDate()}</p>
      </div>
    `;
    });

    this.remainingDailyBudgetNode.innerHTML = `
      <p id="remaining-daily-budget-node" class="daily-budget-remaining">
        ${remainingDailyBudget}
      </p>
    `;
  }

  handleBtnAddClick = () => {
    if (settingsSidebar.classList.contains("show")) {
      const budget = this.budgetInputNode.value;
      this.onBudgetAdd(budget);
      this.budgetInputNode.value = "";
      this.budgetInputNode.placeholder = `${budget}`;
    } else {
      const expense = this.expenseInputNode.value;
      this.onExpenseAdd(expense);
      this.expenseInputNode.value = "";
    }
  };

  getDate = () => {
    const date = new Date();
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };
}
