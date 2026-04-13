import { checkoutSchema } from "./checkout.schema";
import * as zod from "zod"

export type CheckoutFormObject = zod.infer<typeof checkoutSchema>