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

  handleModelBudgetChanged = (budget) => {
    this.view.renderBudget(budget);
  };

  handleModelExpenseChanged = (expenses) => {
    this.view.renderExpenses(expenses);
  };

  handleViewNewBudget = (budget) => {
    this.model.addBudget(budget);
  };

  handleViewNewExpense = (expense) => {
    this.model.addExpense(expense);
  };
}
