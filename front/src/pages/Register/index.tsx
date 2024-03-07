import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RegisterType } from "../../../@types";
import { InputField } from "../../components/InputField";

import classNames from "classnames";

import ax from "../../util/api";

import { useAppDispatch } from "../../store";
import { login } from "../../store/reducer";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<RegisterType>({
    mode: "onChange",
  });

  const onSubmit = (data: RegisterType) => {
    if (isSubmitting || isSubmitted) return;

    const { email, password, passwordConfirm } = data;

    ax
      .post("/signup", {
        email,
        pw: password,
        comparePw: passwordConfirm,
      })
      .then((res) => {
        alert("회원가입 성공! 메인페이지로 이동합니다.");
        dispatch(login());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={classNames(
        "container",
        "flex",
        "flex-col",
        "justify-center",
        "items-center"
      )}
    >
      <div
        className={classNames(
          "mb-12",

          "text-5xl",
          "text-center",
          "font-bold"
        )}
      >
        더 쉬운 폼을 위한 시작 <br />
        폼나는싸패
      </div>

      <form className={classNames("w-1/3")} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label={"이메일"}
          type={"text"}
          register={register}
          errors={errors}
        />

        <InputField
          label={"비밀번호"}
          type={"password"}
          register={register}
          errors={errors}
        />

        <InputField
          label={"비밀번호 확인"}
          type={"passwordConfirm"}
          watch={watch}
          register={register}
          errors={errors}
        />

        <input
          type="submit"
          className={classNames(
            "w-full",

            "mt-6",
            "py-4",

            "flex",
            "justify-center",
            "items-center",

            "rounded-full",

            watch("email") &&
              watch("password") &&
              watch("passwordConfirm") &&
              !errors.email &&
              !errors.password &&
              !errors.passwordConfirm
              ? "bg-theme cursor-pointer hover:bg-opacity-80"
              : "bg-[#d4d4d4]",

            "font-bold",
            "text-white"
          )}
          value={"회원가입"}
        />
      </form>
    </div>
  );
};

export default RegisterPage;