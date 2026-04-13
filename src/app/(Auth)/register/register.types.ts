import { registeredSchema } from "./register.schema";
import * as zod from "zod"

export type RegisterFormObject = zod.infer<typeof registeredSchema>