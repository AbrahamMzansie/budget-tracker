import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";


const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const addNewExpenseHandler = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <form onSubmit={addNewExpenseHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Expense Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Expense Cost
        </label>
        <input
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
};
export default AddExpenseForm;
