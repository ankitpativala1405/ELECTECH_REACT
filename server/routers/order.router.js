import Router from "express";
import { OrderController } from "../controllers/order.controller.js";

const OrderRouter = Router();

OrderRouter.get("/",OrderController.GetOrder);
OrderRouter.post("/",OrderController.SetOrder)
OrderRouter.patch("/:id",OrderController.UpdateOrder);
OrderRouter.delete("/:id",OrderController.DeleteOrder);

export default OrderRouter;
