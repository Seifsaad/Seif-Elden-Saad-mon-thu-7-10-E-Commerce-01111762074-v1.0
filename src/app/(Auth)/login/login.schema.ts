import * as zod from "zod";

export const loginSchema = zod
  .object({
    email: zod.string().nonempty("email is required").email("invalid email"),
    password: zod
      .string()
      .nonempty("password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum eight characters,one letter, one number and one special character",
      ),
  })