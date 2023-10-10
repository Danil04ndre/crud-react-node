import { Form } from "./Form";
import "../css/Modal.css";
import svg from "../assets/cerrar.svg";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";
const Modal = ({ children }) => {
  const { setOpenModal, openModal } = useContext(CrudContext);

  return (
    <div
      className={openModal ? "modal-containner is-open" : "modal-containner"}
      onClick={() => setOpenModal(false)}
    >
      <Form>
        <button type="button" onClick={() => setOpenModal(false)}>
          <img src={svg} alt="" />
        </button>
      </Form>
    </div>
  );
};

export default Modal;
