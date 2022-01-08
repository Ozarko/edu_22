import React from "react";
import ExpenseItem from "./ExpeseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";


const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
