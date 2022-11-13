import { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";

const Create = () => {
  const { createEmpleados } = useAppContext(AppContext);
  const [nombre, setNombre] = useState("");
  const [image, setImage] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmpleados({ id: Date.now(), image, nombre, telefono, email });
    setImage("");
    setNombre("");
    setTelefono("");
    setEmail("");
  };

  return (
    <div className="d-flex flex-row justify-content-center alig-items-center">
      <form
        className="w-50 p-3 center-block border  rounded"
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <h2>Agregar nuevo empleado</h2>
        </div>

        <div className="form-floating mb-3">
          <input
            required
            className="form-control"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL de la imagen"
          />
          <label>URL de la imagen</label>
        </div>

        <div className="form-floating mb-3">
          <input
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
          <label>Nombre</label>
        </div>

        <div className="form-floating mb-3">
          <input
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Telefono"
          />
          <label>Teléfono</label>
        </div>

        <div className="form-floating mb-3">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Email"
          />
          <label>E-mail</label>
        </div>

        <div className="d-grid mt-2">
          <button className="btn btn-primary" type="submit">
            <i className="fa-solid fa-circle-plus fa-2x"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
