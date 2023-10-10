import "../css/AddRegister.css";
import { Form } from "../components/Form";
import { CrudProvider } from "../context/CrudContext";

const AddRegister = () => {
  return (
    <>
      <CrudProvider>
        <Form />
      </CrudProvider>
    </>
  );
};

export default AddRegister;
