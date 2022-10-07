const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../middelwares");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      default: "Guest",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const schemas = {
  registerSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
