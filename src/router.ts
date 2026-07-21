import { Router } from "express";

const router = Router();

//authentication routes
router.post("/auth/register", (req, res) => {
  console.log(req.body);
});

export default router;
