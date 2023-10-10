import { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";
import Message from "./Message";

const initialForm = {
  id: null,
  nombres: "",
  apellidos: "",
  edad: "",
  estudios: "",
};
export const Form = ({ children }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const { createData, updateData, dataToEdit,setOpenModal } = useContext(CrudContext);
  
 
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    if (
      e.target.nombres.value == "" ||
      e.target.apellidos.value == "" ||
      e.target.edad.value == "" ||
      e.target.estudios.value == ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
      {children}
      <div>
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          onChange={handleChange}
          value={form.nombres}
        />
      </div>
      <div className="">
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          onChange={handleChange}
          value={form.apellidos}
        />
      </div>
      <div>
        <label htmlFor="">Edad:</label>
        <input
          type="number"
          name="edad"
          onChange={handleChange}
          value={form.edad}
        />
      </div>
      <div>
        <label htmlFor="estudios">Estudios:</label>
        <select name="estudios" onChange={handleChange} value={form.estudios}>
          <option value="" disabled>
            No seleccionado
          </option>
          <option value="Preescolar">Educación Preescolar</option>
          <option value="Primaria">Educación Primaria</option>
          <option value="Secundaria">Educación Secundaria</option>
          <option value="Tecnica">Educación Técnica o Vocacional</option>
          <option value="Superior">Educación Superior</option>
          <option value="Terciaria">Educación Terciaria</option>
          <option value="Continua">Educación Continua</option>
          <option value="Distancia">Educación a Distancia o en Línea</option>
          <option value="Especial">Educación Especial</option>
        </select>
      </div>

      {error ? <Message msg="Datos incompletos." color="red" /> : ""}
      <input type="submit" value={form.id === null ? "Agregar" : "Editar"} />
    </form>
  );
};
