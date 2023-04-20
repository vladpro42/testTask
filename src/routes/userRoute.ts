import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export { router as userRouter };