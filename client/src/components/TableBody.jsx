import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import PropTypes from "prop-types";

const TableBody = ({ el }) => {
  const { setDataToEdit, setOpenModal, deleteData } = useContext(CrudContext);
  const { id, nombres, apellidos, edad, estudios } = el;

  const handleEdit = () => {
    setDataToEdit(el);
    setOpenModal(true);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{edad}</td>
      <td>{estudios}</td>
      <td>
        <button className="edit">
          <i className="fa-solid fa-pen-to-square" onClick={handleEdit}></i>
        </button>
        <button className="delete">
          <i className="fa-solid fa-trash" onClick={() => deleteData(id)}></i>
        </button>
      </td>
    </tr>
  );
};
TableBody.propTypes = {
  el: PropTypes.object.isRequired,
};
export default TableBody;
