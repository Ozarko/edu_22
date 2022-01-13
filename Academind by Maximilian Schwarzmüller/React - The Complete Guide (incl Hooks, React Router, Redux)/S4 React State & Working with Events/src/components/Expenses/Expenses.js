import React from "react";
import ExpenseItem from "./ExpeseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react/cjs/react.development";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const filterYearHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterYearChange={filterYearHandler}
      />
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
