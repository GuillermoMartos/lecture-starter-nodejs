import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";
import { tokenValidation } from "../middlewares/auth.tokenValidation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/", tokenValidation, async (req, res, next) => {
  const storedFighters = fighterService.getAllFighters();
  res.body = storedFighters;
  return next(res);
});

router.get("/:id", async (req, res) => {
  const fighterId = req.params.userId;
});

export { router };
