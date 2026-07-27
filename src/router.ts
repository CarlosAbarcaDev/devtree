import { Router } from "express";
import { body } from "express-validator";
import { createUser } from "./handlers/index.ts";

const router = Router();

//authentication routes
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("Handle is required"),
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  createUser,
);

export default router;
