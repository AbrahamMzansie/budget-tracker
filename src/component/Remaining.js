import React , {useContext} from "react";
import {AppContext} from "../context/AppContext";

const Remaining = () => {
  const {expenses , budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total ,item)=>{
    return  total = total + item.cost
  } ,0)
  const remaining = budget - totalExpenses;
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success"
  return <div className={`alert ${alertType}`}>
      <span>Remaining : R{remaining}</span>
  </div>;
};
export default Remaining;
