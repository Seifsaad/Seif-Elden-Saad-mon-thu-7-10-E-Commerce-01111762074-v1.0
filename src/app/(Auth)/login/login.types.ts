import { loginSchema } from "./login.schema";
import * as zod from "zod"

export type LoginFormObject = zod.infer<typeof loginSchema>