import * as zod from "zod";

export const checkoutSchema = zod
  .object({
    shippingAddress: zod.object({

      city: zod.string().nonempty("city is required"),
      details: zod.string().nonempty("address is required"),
      phone: zod
      .string()
      .nonempty("phone is required")
      .regex(/01[0125][0-9]{8}/, "invalid phone number"),
      postalCode: zod.string().nonempty('postal code is required'),
    })
  })