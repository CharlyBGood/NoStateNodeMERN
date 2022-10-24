import { Router } from "express";
import * as usersController from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.deleteUser);

export default router;
