"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "_/components/ui/field";
import { Input } from "_/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { registeredSchema } from "./register.schema";
import { RegisterFormObject } from "./register.types";
import { RegisterAction } from "./register.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function RegisterForm() {

  const Router =useRouter()


  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registeredSchema),
  });
  async function mySubmit(data: RegisterFormObject) {
    console.log("registered", data);

    const isRegisteredSuccessfuly = await RegisterAction(data);
    console.log('isRegisteredSuccessfuly', isRegisteredSuccessfuly);
    if(isRegisteredSuccessfuly){
      toast.success('Registered Successfuly',{duration:3000 , position:'top-right', style:{color:'green'}} )
      setTimeout(()=>{
        Router.push('/login')
      },3000)
    }else{
      toast.error('account already exist' , {duration:3000 , position:'top-right'})
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit(mySubmit)} className="flex flex-col gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="User Name"
                autoComplete="off"
                type="text"
                className="focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-0"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input
                {...field}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="User phone"
                autoComplete="off"
                type="number"
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
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="repass">confirm password</FieldLabel>
              <Input
                {...field}
                id="repass"
                aria-invalid={fieldState.invalid}
                placeholder="confirm password"
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
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl my-2 mt-10 transition cursor-pointer duration-300 ease-in-out"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
