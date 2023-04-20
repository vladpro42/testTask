import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post('/user', userController.createUser);
router.get('/user/:email', userController.getUser);
router.put('/user', userController.updateUser);
router.delete('/user/:email', userController.deleteUser);

export { router as userRouter };