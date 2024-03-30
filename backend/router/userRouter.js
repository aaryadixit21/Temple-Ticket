import express from "express";
import {
  getUserDetails,
  login,
  logoutVisitor,
  visitorRegister,
} from "../controller/userController.js";
import {isVisitorAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

router.post("/visitor/register", visitorRegister);
router.post("/login", login);
router.get("/visitor/me", isVisitorAuthenticated, getUserDetails);
router.get("/visitor/logout", isVisitorAuthenticated, logoutVisitor);

export default router;