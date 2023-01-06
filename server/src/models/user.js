import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (value) {
    this._password = value;
    this.passwordHash = bcrypt.hashSync(value, 12);
  });

userSchema
  .virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

userSchema.pre("save", function (next) {
  if (this._password) {
    if (this._password.length < 8) {
      this.invalidate("password", "Password must be at least 8 characters.");
    } else if (this._password.length > 30) {
      this.invalidate(
        "password",
        "Password can't be longer than 30 characters"
      );
    }

    if (!this._confirmPassword) {
      this.invalidate("confirmPassword", "You must confirm your password");
    } else if (this._password !== this._confirmPassword) {
      this.invalidate("confirmPassword", "Passwords must match.");
    }
  }

  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required.");
  }
  next();
});

const User = model("User", userSchema);

export default User;
