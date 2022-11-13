import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  empleados: [
    {
      id: 1,
      image: "img/1.png",
      nombre: "Oscar Neira",
      telefono: "3134252467",
      email: "oscar@gmail.com",
    },
    {
      id: 2,
      image: "img/2.png",
      nombre: "Yesid Tavera",
      telefono: "3123940529",
      email: "yesid@gmail.com",
    },
    {
      id: 3,
      image: "img/3.png",
      nombre: "Pedro Perez",
      telefono: "3114787457",
      email: "pedro@gmail.com",
    },
    {
      id: 4,
      image: "img/4.png",
      nombre: "Andres Tavera",
      telefono: "3134565478",
      email: "andres@gmail.com",
    },
  ],
};

export const AppProvider = ({ children }) => {
  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const createEmpleados = (empleado) =>
    dispatch({ type: CREATE, payload: empleado });
  const updateEmpleados = (empleado) =>
    dispatch({ type: UPDATE, payload: empleado });
  const deleteEmpleados = (id) => dispatch({ type: DELETE, payload: id });

  return (
    <AppContext.Provider
      value={{
        empleados: state.empleados,
        createEmpleados,
        updateEmpleados,
        deleteEmpleados,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
