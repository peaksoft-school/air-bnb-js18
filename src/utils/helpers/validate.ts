import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(320, "Email must be at most 320 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters"),
});

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(320, "Email must be at most 320 characters"),
});
