import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onClick }) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <main className={styles.content}>
          <p>{message}</p>
        </main>
        <footer className={styles.actions}>
          <Button onClick={onClick}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
