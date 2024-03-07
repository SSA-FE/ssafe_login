import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

export type RegisterType = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type LoginType = {
  userId: string;
  userPw: string;
};

export type InputFieldType = {
  label: string;
  type: string;
  register: UseFormRegister<RegisterType>;
  errors: FieldErrors<RegisterType>;
  watch?: UseFormWatch<RegisterType>;
};

export type UserButtonType = {
  user: Boolean;
  logout: () => void;
};
