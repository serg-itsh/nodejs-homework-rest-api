const express = require("express"); //

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate } = require("../../middelwares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
