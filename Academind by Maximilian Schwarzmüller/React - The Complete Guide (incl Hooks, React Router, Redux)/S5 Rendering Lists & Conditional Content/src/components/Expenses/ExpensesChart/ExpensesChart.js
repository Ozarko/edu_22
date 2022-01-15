import React from 'react'
import Chart from '../../Chart/Chart';

const ExpensesChart = ({expenses}) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartDataPoints = monthNames.map(month => {
    const monthExpenses = expenses.filter(
      (expense) => {
        return monthNames[new Date(expense.date).getMonth()] === month;
      }
    );

    const monthExpensesAmount = monthExpenses.reduce((acc, item)=> {
      return (acc += Number(item.amount));
    }, 0)

    return {label: month, value: monthExpensesAmount }
  })

  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
}

export default ExpensesChart
