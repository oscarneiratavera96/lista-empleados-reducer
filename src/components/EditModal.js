import { useEffect, useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";

const EditModal = ({ show, onClose, rowData }) => {
  const { updateEmpleados } = useAppContext(AppContext);

  const [formData, setFormData] = useState({
    id: "",
    image: "",
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmpleados(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  const { image, nombre, telefono, email } = rowData;

  return (
    <>
      <form>
        <Modal show={show} onHide={onClose}>
          <Modal.Header className="modal-tittle text-white" closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                defaultValue={image}
                onChange={(e) => handleOnChange("image", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                defaultValue={nombre}
                onChange={(e) => handleOnChange("nombre", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                defaultValue={telefono}
                onChange={(e) => handleOnChange("telefono", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                defaultValue={email}
                onChange={(e) => handleOnChange("email", e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default EditModal;
