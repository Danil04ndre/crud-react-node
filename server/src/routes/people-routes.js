import { Router } from "express";
import {
  getController,
  postController,
  putController,
  deteleController,
} from "../controllers/people-controller.js";

const routerProduct = Router();
routerProduct.get("/api/get", getController);

routerProduct.post("/api/post", postController);

routerProduct.put("/api/put/:id", putController);

routerProduct.delete("/api/delete/:id", deteleController);

export default routerProduct;
