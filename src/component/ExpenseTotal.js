import React , {useContext} from "react";
import {AppContext} from "../context/AppContext";

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total ,item)=>{
    return  total = total + item.cost
  } ,0)
  return (
    <div className="alert alert-primary">
      <span>Spent So Far : R {totalExpenses}</span>
    </div>
  );
};
export default ExpenseTotal;