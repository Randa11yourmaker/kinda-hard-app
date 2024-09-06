class Model {
  constructor({ onBudgetChanged, onExpenseChanged }) {
    this.budget = 0;
    this.expenses = [];

    this.onBudgetChanged = onBudgetChanged;
    this.onExpenseChanged = onExpenseChanged;
  }

  addBudget(budget) {
    this.budget = budget;

    this.onBudgetChanged(this.budget);
  }

  addExpense(expense) {
    this.expenses.push(expense);

    this.onExpenseChanged(this.expenses);
  }
}
