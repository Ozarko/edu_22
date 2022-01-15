import React, { useMemo } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("");

  const filterYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const expenseYear = new Date(expense.date).getFullYear().toString();
      return selectedYear ? expenseYear === selectedYear : true;
    });
  }, [expenses, selectedYear]);

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterYearChange={filterYearHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
