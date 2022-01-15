import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showAddExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const showExpenseFormToggle = () => {
    setShowExpenseForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {showAddExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowExpenseFormToggle={showExpenseFormToggle}
        />
      ) : (
        <button onClick={showExpenseFormToggle}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
