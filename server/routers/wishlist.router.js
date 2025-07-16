import Router from 'express'
import { WishlistController } from '../controllers/wishlist.controller.js'

const WishlistRouter = Router()

WishlistRouter.get("/", WishlistController.GetWishlist)
WishlistRouter.post("/", WishlistController.SetWishlist)
WishlistRouter.patch("/:id", WishlistController.UpdateWishlist)
WishlistRouter.delete("/:id", WishlistController.DeleteWishlist)

export default WishlistRouter