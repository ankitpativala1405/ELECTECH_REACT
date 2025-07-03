import Router from 'express'
import { UserController } from '../controllers/user.controller.js'

const router = Router()

router.get("/", UserController.GetUser)
router.post("/", UserController.SetUser)
router.patch("/:id", UserController.UpdateUser)
router.delete("/:id", UserController.DeleteUser)

export default router