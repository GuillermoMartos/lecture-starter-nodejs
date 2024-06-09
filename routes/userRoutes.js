import { Router } from "express";
import { userService } from "../services/userService.js";
import { createUserValid } from "../middlewares/user.validation.middleware.js";
import { tokenValidation } from "../middlewares/auth.tokenValidation.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.post("/", createUserValid, async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    // db should do this logic, but since it doesn't, we only take expected model values
    const unidentifiedUserResponse = userService.createUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
    res.body = unidentifiedUserResponse;
    return next(req.body);
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", tokenValidation, async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = userService.deleteUserById(id);
    res.body = deletedUser;
    return next(res);
  } catch (error) {
    return next(error);
  }
});

export { router };
