import { useState } from "react";

import visible_on from "../../assets/icon/visible_on.svg";
import visible_off from "../../assets/icon/visible_off.svg";

import {
  CONFIRM_PASSWORD_MESSAGE,
  EMAIL_MESSAGE,
  PASSWORD_MESSAGE,
} from "../../constants/messages";
import classNames from "classnames";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regexr";

export const InputField = ({ label, type, register, errors, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false);

  if (type === "password") {
    return (
      <div className={classNames("mb-4")}>
        <label
          for="input-password"
          className={classNames(
            "px-4",
            "mb-2",

            "flex",

            "font-bold",
            "text-neutral-600"
          )}
        >
          {label}
        </label>
        <div className="relative">
          <input
            id="input-password"
            type={isPasswordVisible ? "text" : "password"}
            className={classNames(
              "w-full",

              "p-4",

              "border-2",
              "border-neutral-300",

              "rounded-full",

              "focus:border-[#6ED1F9]",
              "focus:outline-none"
            )}
            {...register("password", {
              required: true,
              pattern: {
                value: PASSWORD_REGEX,
                message: PASSWORD_MESSAGE,
              },
            })}
          />

          <div
            className={classNames(
              "absolute",

              "top-1/2",
              "right-4",

              "translate-y-[-50%]",

              "cursor-pointer"
            )}
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            <img
              src={isPasswordVisible ? visible_on : visible_off}
              alt="비밀번호 표시"
              className="w-5"
            />
          </div>
        </div>

        <div
          className={classNames(
            "px-4",
            "py-2",

            "text-[#F93F3F]",
            "text-sm",
            "font-semibold"
          )}
        >
          {errors.password && errors.password.message} &nbsp;
        </div>
      </div>
    );
  } else if (type === "passwordConfirm") {
    return (
      <div className="relative">
        <label
          for="input-password-confirm"
          className={classNames(
            "px-4",
            "mb-2",

            "flex",

            "font-bold",
            "text-neutral-600"
          )}
        >
          {label}
        </label>
        <div>
          <input
            id="input-password-confirm"
            type={isPasswordConfirmVisible ? "text" : "password"}
            className={classNames(
              "w-full",

              "p-4",

              "border-2",
              "border-neutral-300",

              "rounded-full",

              "focus:border-[#6ED1F9]",
              "focus:outline-none"
            )}
            {...register("passwordConfirm", {
              required: true,
              validate: (v) =>
                v === rest.watch("password") || CONFIRM_PASSWORD_MESSAGE,
            })}
          />
          <div
            className={classNames(
              "absolute",

              "top-1/2",
              "right-4",

              "translate-y-[-50%]",

              "cursor-pointer"
            )}
            onClick={() => {
              setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
            }}
          >
            <img
              src={isPasswordConfirmVisible ? visible_on : visible_off}
              alt="비밀번호 표시"
              className="w-5"
            />
          </div>
        </div>

        <div
          className={classNames(
            "px-4",
            "py-2",

            "text-[#F93F3F]",
            "text-sm",
            "font-semibold"
          )}
        >
          {errors.passwordConfirm && errors.passwordConfirm.message} &nbsp;
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("mb-4")}>
      <label
        for="input-email"
        className={classNames(
          "px-4",
          "mb-2",

          "flex",

          "font-bold",
          "text-neutral-600"
        )}
      >
        {label}
      </label>

      <div>
        <input
          id="input-email"
          type={type}
          className={classNames(
            "w-full",

            "py-4",
            "pl-4",
            "pr-8",

            "border-2",
            "border-neutral-300",
            "rounded-full",

            "focus:border-[#6ED1F9]",
            "focus:outline-none"
          )}
          placeholder="ssafe11@gmail.com"
          {...register("email", {
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: EMAIL_MESSAGE,
            },
          })}
        />
      </div>

      <div
        className={classNames(
          "px-4",
          "py-2",

          "text-[#F93F3F]",
          "text-sm",
          "font-semibold"
        )}
      >
        {errors.email && errors.email.message} &nbsp;
      </div>
    </div>
  );
};
