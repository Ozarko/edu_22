import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpeseItem/ExpenseItem";

const ExpensesList = ({ expenses }) => {
  
  if (!expenses.length) {
    return <h2 className="expenses-list__fallback">
      Found no expenses
    </h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </ul>
  );
};

export default ExpensesList;
