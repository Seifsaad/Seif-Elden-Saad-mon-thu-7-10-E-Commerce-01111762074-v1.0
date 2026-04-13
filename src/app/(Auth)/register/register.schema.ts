import * as zod from "zod";

export const registeredSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("name is required")
      .min(3, "name must be at least 3 characters")
      .max(20, "name must be at most 20 characters"),
    email: zod.string().nonempty("email is required").email("invalid email"),
    password: zod
      .string()
      .nonempty("password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum eight characters,one letter, one number and one special character",
      ),
    rePassword: zod
      .string().nonempty("repassword is required"),
    phone: zod
      .string()
      .nonempty("phone is required")
      .regex(/01[0125][0-9]{8}/, "invalid phone number"),
  })
  .refine(function (value){
    return value.password === value.rePassword
  },{error:'password does not match',path:["rePassword"]});