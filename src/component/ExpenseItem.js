import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const deleteExpenseHandler = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">R {cost}</span>
        <TiDelete
          onClick={() => deleteExpenseHandler(id)}
          size="1.5em"
        ></TiDelete>
      </div>
    </li>
  );
};
export default ExpenseItem;
