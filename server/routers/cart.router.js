import Router from "express";
import { CartController } from "../controllers/cart.controller.js";

const CartRouter = Router();

WishlistRouter.get("/", CartController.GetWishlist);
WishlistRouter.post("/", CartController.SetWishlist);
WishlistRouter.patch("/:id", CartController.UpdateWishlist);
WishlistRouter.delete("/:id", CartController.DeleteWishlist);

export default CartRouter;
