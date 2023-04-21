import { Router } from "express";
import userControllerOrm from "../controllers/userControllerOrm.js";

const router = Router();

router.post("/user", userControllerOrm.createUser);
router.get("/user", userControllerOrm.findAllUsers);
router.get('/user/:email', userControllerOrm.findOneUser);
router.put('/user', userControllerOrm.updateUser);
router.delete('/user/:email', userControllerOrm.deleteUser);
router.delete('/user/', userControllerOrm.deleteAllUsers);

export { router as userRouter };