class View {
  constructor({ onBudgetAdd, onExpenseAdd }) {
    this.budgetNode = document.querySelector("#budget-node");
    this.expensesNode = document.querySelector("#expense-node");

    this.expenseInputNode = document.querySelector(".expenses-input");
    this.budgetInputNode = document.querySelector(".budget-input");
    this.btnAddNode = document.querySelector(".btn-enter");

    this.btnAddNode.addEventListener("click", this.handleBtnAddClick);

    this.onBudgetAdd = onBudgetAdd;
    this.onExpenseAdd = onExpenseAdd;
  }

  renderBudget(budget) {
    this.budgetNode.innerHTML = "";

    this.budgetNode.innerHTML = `
      <p class="available-budget">${budget} на 30 дней</p>
    `;
  }

  renderExpenses(expenses) {
    this.expensesNode.innerHTML = "";

    expenses.forEach((expense) => {
      this.expensesNode.innerHTML += `
      <div class="expense">
        <h2 class="expense-amount">${expense}</h2>
        <p class="expense-day">сегодня</p>
      </div>
    `;
    });
  }

  handleBtnAddClick = () => {
    if (settingsSidebar.classList.contains("show")) {
      const budget = this.budgetInputNode.value;
      this.onBudgetAdd(budget);
      this.budgetInputNode.value = "";
    } else {
      const expense = this.expenseInputNode.value;
      this.onExpenseAdd(expense);
      this.expenseInputNode.value = "";
    }
  };
}
