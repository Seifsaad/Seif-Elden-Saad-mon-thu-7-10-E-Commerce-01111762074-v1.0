"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "_/components/ui/field";
import { Input } from "_/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "./login.schema";
import { LoginFormObject } from "./login.types";
import { LoginAction, UpdatedLoggedUserCart, UpdatedLoggedUserWishlist } from "./login.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useCart } from "_/app/_Context/CartContext";
import { useWishlist } from "_/app/_Context/WishlistContext";



export default function LoginForm() {
  const Router = useRouter();
  const {updateNumOfCartUi} = useCart()
  const {updateNumOfWishlistUi} = useWishlist()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  async function mySubmit(data: LoginFormObject) {
    console.log("Logined", data);
    const res = await signIn("credentials", { redirect: false, ...data });
    if (res?.ok) {
      toast.success("Logined Successfuly", {
        duration: 3000,
        position: "top-right",
        style: { color: "green" },
      });
      const [cartRes, wishlistRes]= await Promise.all([UpdatedLoggedUserCart(), UpdatedLoggedUserWishlist()])
      updateNumOfCartUi(cartRes?.products.length ?? 0)
      updateNumOfWishlistUi(wishlistRes?.count ?? 0, wishlistRes?.data.map(p => p.id))
      Router.refresh();
      Router.push("/");
      // setTimeout(() => {
      // }, 3000);
    } else {
      toast.error("Login Failed", {
        duration: 3000,
        position: "top-right",
      });
    }
    // const isLoginSuccessfuly = await LoginAction(data);
    // console.log("isLoginedSuccessfuly", isLoginSuccessfuly);
    // if (isLoginSuccessfuly) {
    //   toast.success("Logined Successfuly", {
    //     duration: 3000,
    //     position: "top-right",
    //     style: { color: "green" },
    //   });
    //   setTimeout(() => {
    //     Router.push("/");
    //   }, 3000);
    // } else {
    //   toast.error("Login Failed", {
    //     duration: 3000,
    //     position: "top-right",
    //   });
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(mySubmit)} className="flex flex-col gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="User Email"
                autoComplete="off"
                type="email"
                className="focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="pass">password</FieldLabel>
              <Input
                {...field}
                id="pass"
                aria-invalid={fieldState.invalid}
                placeholder="password"
                autoComplete="off"
                type="password"
                className="focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white cursor-pointer font-semibold py-2 px-4 rounded-xl transition duration-300 ease-in-out"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
