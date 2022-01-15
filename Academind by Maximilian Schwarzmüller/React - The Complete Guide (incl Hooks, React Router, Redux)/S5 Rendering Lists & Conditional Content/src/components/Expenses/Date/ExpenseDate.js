import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
  const year = dateObj.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate
