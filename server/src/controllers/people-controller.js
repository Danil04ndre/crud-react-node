import { conn } from "../db.js";

export const postController = async (req, res) => {
  try {
    const { nombres, apellidos, edad, estudios } = req.body;

    const respuesta = await conn.query(
      "INSERT INTO persona (nombres,apellidos,edad,estudios) VALUES (?,?,?,?)",
      [nombres, apellidos, edad, estudios]
    );
    if (respuesta[0].affectedRows > 0) {
      res.status(200).json({ msg: "ok" });
    } else {
      res.status(404).json({ msg: "Error ha registrar producto." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor." });
  }
};

export const getController = async (req, res) => {
  try {
    const resultado = await conn.query("SELECT * FROM persona");
    if (resultado) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(404).json;
    }
  } catch (err) {
    return res.status(500);
  }
};

export const putController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, edad, estudios } = req.body;

    const resultado = await conn.query(
      "UPDATE persona SET nombres = ?, apellidos = ?, edad = ?, estudios = ? WHERE id = ?",
      [nombres, apellidos, edad, estudios, id]
    );

    if (resultado[0].affectedRows > 0) {
      res.status(200).json({ msg: "ok" });
    } else {
      res.status(404).json({ msg: "Registro no encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor." });
  }
};

export const deteleController = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await conn.query("DELETE FROM persona WHERE id = ?", [
      id,
    ]);

    if (respuesta[0].affectedRows > 0) {
      res.status(200).json({ msg: "ok" });
    } else {
      res.status(404).json({ msg: "Error al eliminar el registro." });
    }
  } catch (err) {
    return res.status(500).json("Error en el servidor.");
  }
};
