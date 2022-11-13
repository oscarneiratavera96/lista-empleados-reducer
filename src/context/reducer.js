import { CREATE, UPDATE, DELETE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE: {
      return {
        ...state,
        empleados: [...state.empleados, action.payload],
      };
    }

    case UPDATE: {
      return {
        ...state,
        empleados: state.empleados.map((empleado) => {
          return empleado.id === action.payload.id ? action.payload : empleado;
        }),
      };
    }

    case DELETE: {
      return {
        ...state,
        empleados: state.empleados.filter((empleado) => {
          return empleado.id !== action.payload;
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
