import express from "express";
import {
  login,
  visitorRegister,
} from "../controller/userController.js";

const router = express.Router();

router.post("/visitor/register", visitorRegister);
router.post("/login", login);

export default router;