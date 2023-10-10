import { useContext } from "react";
import { Form } from "../components/Form";
import Modal from "../components/Modal";
import TableBody from "../components/TableBody";
import CrudContext from "../context/CrudContext";
import "../css/Home.css";

const Home = () => {
  const { dataDb } = useContext(CrudContext);

  return (
    <>
      <div className="content-table">
        <table>
          <thead>
            <tr className="first-tr">
              <th>ID</th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>EDAD</th>
              <th>ESTUDIOS</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {dataDb.length === 0 ? (
              <tr>
                <td colSpan="6">Sin datos.</td>
              </tr>
            ) : (
              dataDb.map((el) => <TableBody key={el.id} el={el} />)
            )}
          </tbody>
        </table>
      </div>
      <Modal>
        <Form />
      </Modal>
    </>
  );
};

export default Home;
