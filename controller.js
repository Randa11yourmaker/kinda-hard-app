class Controller {
  constructor() {
    this.model = new Model({
      onBudgetChanged: this.handleModelBudgetChanged,
      onExpenseChanged: this.handleModelExpenseChanged,
    });
    this.view = new View({
      onBudgetAdd: this.handleViewNewBudget,
      onExpenseAdd: this.handleViewNewExpense,
    });
  }

  handleModelBudgetChanged = (budget, dailyBudget, remainingDailyBudget) => {
    this.view.renderBudget(budget, dailyBudget, remainingDailyBudget);
  };

  handleModelExpenseChanged = (expenses, remainingDailyBudget) => {
    this.view.renderExpenses(expenses, remainingDailyBudget);
  };

  handleViewNewBudget = (budget) => {
    this.model.addBudget(budget);
  };

  handleViewNewExpense = (expense) => {
    this.model.addExpense(expense);
  };
}
