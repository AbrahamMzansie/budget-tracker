import React , {useContext} from "react";
import {AppContext} from "../context/AppContext";
import NumberFormat from 'react-number-format';

const Budget = () => {
  const {budget} = useContext(AppContext)
  return (
    <div className="alert alert-secondary">
      <span>Budget : R{budget}</span>
    </div>
  );
};
export default Budget;
