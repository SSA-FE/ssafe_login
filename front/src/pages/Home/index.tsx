import { Link } from "react-router-dom";

import classNames from "classnames";

export const HomePage = () => {
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
          "mb-32",

          "flex",
          "flex-col",
          "justify-center",
          "items-center",

          "font-bold"
        )}
      >
        <div className={classNames("text-neutral-600")}>
          데이터 수집을 위한 올인원 툴
        </div>

        <div
          className={classNames(
            "my-4",

            "text-center",
            "text-5xl"
          )}
        >
          폼을 만들고 분석하는 <br />
          가장 합리적인 방법
        </div>

        <div
          className={classNames(
            "w-full",

            "text-slate-800",
            "text-[18px]",
            "text-center",

            "leading-5"
          )}
        >
          폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.{" "}
          <br />
          모든 핵심 과정을 싸피에서 한번에 해결하실 수 있습니다.
        </div>
      </div>
      <Link to={"/join"}>
        <div
          className={classNames(
            "w-[300px]",
            "py-4",

            "flex",
            "justify-center",
            "items-center",

            "rounded-full",

            "bg-theme",

            "font-bold",
            "text-white"
          )}
        >
          회원가입
        </div>
      </Link>
    </div>
  );
};
