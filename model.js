class Model {
  constructor({ onBudgetChanged, onExpenseChanged }) {
    this.budget = 0;
    this.dailyBudget = 0;

    this.expenses = [];
    this.remainingDailyBudget = 0;

    this.onBudgetChanged = onBudgetChanged;
    this.onExpenseChanged = onExpenseChanged;
  }

  addBudget(budget) {
    this.budget = budget;
    this.dailyBudget = Math.floor(budget / 30);
    this.remainingDailyBudget = this.dailyBudget;

    this.onBudgetChanged(
      this.budget,
      this.dailyBudget,
      this.remainingDailyBudget
    );
  }

  addExpense(expense) {
    this.expenses.push(expense);
    this.remainingDailyBudget -= expense;

    this.onExpenseChanged(this.expenses, this.remainingDailyBudget);
  }
}
