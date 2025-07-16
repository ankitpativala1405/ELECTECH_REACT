import Router from "express";
import { CartController } from "../controllers/cart.controller.js";

const CartRouter = Router();

CartRouter.get("/", CartController.GetCart);
CartRouter.post("/", CartController.SetCart)
CartRouter.patch("/:id", CartController.UpdateCart);
CartRouter.delete("/:id", CartController.DeleteCart);

export default CartRouter;
