import React from "react";
import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => 
        (<TodoItem todoDate={item.dueDate} todoName={item.name} ></TodoItem>)
      )}
    </div>
  );
};

export default TodoItems;
