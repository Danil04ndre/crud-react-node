import express from "express";
import { PORT } from "./config.js";
import routerProduct from "./routes/people-routes.js";
import cors from "cors";

import "./config.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use(routerProduct);

app.use((req, res, next) => {
  res.status(404).json({ msg: "Not Found endpoint" });
});
app.listen(PORT, () => {
  console.log("server listen" + PORT);
});