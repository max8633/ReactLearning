import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 7, 1);
  const expenseTitle = "AllDAY Coffee";
  const expenseAmount = 180;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
