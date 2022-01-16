import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onUserChange }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const [error, setError] = useState();

  const onUserNameChangeHandler = ({ target }) => {
    setEnteredUserName(target.value);
  };
  const onUserAgeChangeHandler = ({ target }) => {
    setEnteredUserAge(target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim() && enteredUserAge.trim()) {
      if (+enteredUserAge < 1) {
        setError({
          title: "Invalide input",
          message: "Please enter a valide  age (> 0).",
        });
      } else {
        onUserChange(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
      }
    } else {
      setError({
        title: "Invalide input",
        message: "Please enter a valide name and age (non-empty values).",
      });
    }
  };

  return (
    <>
      {error && <ErrorModal {...error} onClick={() => setError()} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={onUserNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={onUserAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
