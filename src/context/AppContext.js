import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const updatedExpense = {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      return updatedExpense;
      case "DELETE_EXPENSE":
          const updatedDeletedExpense = {
            ...state,
            expenses: state.expenses.filter(expense=>expense.id !== action.payload),
          }
          return updatedDeletedExpense;
    default:
      return state;
  }
};
const initialState = {
  budget: 3000,
  expenses: [
    { id: 1000000, name: "Shopping", cost: 100 },
    { id: 1000001, name: "Shopping", cost: 200 },
    { id: 1000002, name: "Car Allowance", cost: 300 },
    { id: 1000003, name: "Mining Equipment", cost: 400 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
