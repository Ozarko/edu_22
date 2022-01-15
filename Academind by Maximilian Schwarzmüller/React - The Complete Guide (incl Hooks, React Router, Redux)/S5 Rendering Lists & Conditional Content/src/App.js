import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

const App = () => {
  const [storedValue, setStoredValue] = useLocalStorage("expense", []);
  const [expenses, setExpen] = useState(storedValue);

  const addExpenseHandler = (expense) => {
    setExpen((prev) => [expense, ...prev]);
    setStoredValue([expense, ...storedValue]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
