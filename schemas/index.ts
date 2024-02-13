import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Error: Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

const PSW_CHARACTERS = 6;

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Error: Email is required",
  }),
  password: z.string().min(PSW_CHARACTERS, {
    message: `Minimum ${PSW_CHARACTERS} characters`,
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
