import React , {useContext} from "react";
import ExpenseItem from "../component/ExpenseItem";

import {AppContext} from "../context/AppContext"

const ExpenseList = () => {
  const {expenses} = useContext(AppContext);
  
  return (
    <div>
      <ul className="list-group">
        {expenses && expenses.map((expense) => {
          return (
              
              <ExpenseItem key = {expense.id} cost = {expense.cost} id = {expense.id} name = {expense.name}/>
             
          );
        })}
      </ul>
    </div>
  );
};
export default ExpenseList;
