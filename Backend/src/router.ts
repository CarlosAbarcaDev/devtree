import { Router } from "express";
import { body } from "express-validator";
import { createUser, login } from "./handlers/index.ts";
import { handleInputErrors } from "./middleware/validation.ts";

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
  handleInputErrors,
  createUser,
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").notEmpty().withMessage("Password is required"),
  login,
);

export default router;
