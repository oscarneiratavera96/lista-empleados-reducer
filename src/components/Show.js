import { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";
import EditModal from "./EditModal";

const Show = () => {
  const { empleados, deleteEmpleados } = useAppContext(AppContext);
  const [rowData, setRowData] = useState({});

  const [show, setShow] = useState(false);

  const handleShow = (empleado) => {
    setRowData(empleado);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <table className="table table-striped mt-5">
        <thead className="bg-dark text-white">
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <th>
                <img
                  src={empleado.image}
                  alt={empleado.image}
                  className="rounded-circle"
                  style={{ width: 50, height: 50 }}
                />
              </th>
              <th>{empleado.nombre}</th>
              <td>{empleado.telefono}</td>
              <td>{empleado.email}</td>
              <td>
                <div className="btn-group">
                  <button
                    onClick={() => handleShow(empleado)}
                    className="btn btn-info"
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => deleteEmpleados(empleado.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal show={show} onClose={handleClose} rowData={rowData} />
    </>
  );
};

export default Show;
