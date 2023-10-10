import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataDb, setDataDb] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:7000/api/get");
        const json = await res.json();
        setDataDb(json);
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        setDataDb([]);
      }
    };
    getData();
  }, []);

  const createData = async (data) => {
    try {
      const res = await fetch("http://localhost:7000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.msg === "ok") {
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro añadido",
          showConfirmButton: false,
          timer: 850,
          customClass: {
            icon: "swal-icon",
            title: "swal-title",
          },
        });
        window.location.reload();
      }
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error: ${err.status} ${err.statusText}`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          icon: "swal-icon",
          title: "swal-title",
        },
      });
    }
  };
  const updateData = async (data) => {
    try {
      const res = await fetch(`http://localhost:7000/api/put/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.msg == "ok") {
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro actualizado",
          showConfirmButton: false,
          timer: 850,
          customClass: {
            icon: "swal-icon",
            title: "swal-title",
          },
        });
        window.location.reload();
      }
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error: ${err.status} ${err.statusText}`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          icon: "swal-icon",
          title: "swal-title",
        },
      });
    }
  };

  const deleteData = async (id) => {
    const result = await Swal.fire({
      title: "¿Estas Seguro?",
      text: "¡No podrás revertir esto!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      try {
        let res = await fetch(`http://localhost:7000/api/delete/${id}`, {
            method: "DELETE",
          }),
          json = await res.json();
        if (json.msg == "ok") {
          await Swal.fire(
            "¡Eliminado!",
            "El registro que seleccionaste ha sido eliminado.",
            "success"
          );
          window.location.reload();
        }

        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Error: ${err.status} ${err.statusText}`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            icon: "swal-icon",
            title: "swal-title",
          },
        });
      }
    }
  };

  const data = {
    dataDb,
    createData,
    updateData,
    deleteData,
    setDataToEdit,
    dataToEdit,
    setOpenModal,
    openModal,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
