import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItemes evaluated by React");
  const clickHandler = () => {
    setTitle("updated!!!!");

    console.log(title);
  };
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">$ {props.amount}</div>
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          change title
        </button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
