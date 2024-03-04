import classNames from "classnames";
import { NavButton } from "./NavButton";

import { Link } from "react-router-dom";

const GlobalNav = () => {
  return (
    <header
      className={classNames(
        "w-full",
        "h-full",

        "px-8",
        "py-4",

        "border-b",
        "border-solid",
        "border-neutral-300",

        "flex",
        "justify-between",
        "items-center"
      )}
    >
      <div className={classNames("flex", "justify-between", "items-center")}>
        <Link to="/">
          <div className={classNames("font-bold", "cursor-pointer")}>
            폼나는 싸패
          </div>
        </Link>

        <div
          className={classNames(
            "ml-12",

            "gap-x-4",

            "flex",
            "justify-between",
            "items-center"
          )}
        >
          <div
            className={classNames(
              "px-4",
              "py-2",

              "rounded-full",

              "flex",
              "justify-center",
              "items-center",

              "bg-[#f5f5f5]",

              "text-[#a3a3a3]",
              "text-[14px]"
            )}
          >
            v 3.4.1 24/02/13
          </div>

          <div
            className={classNames(
              "px-4",
              "py-2",

              "rounded-full",

              "flex",
              "justify-center",
              "items-center",

              "bg-[#CFFAFE]",

              "text-[#06B6D4]",
              "text-[14px]"
            )}
          >
            2024 SAFFE FORM PROJECT Create your own Form
          </div>
        </div>
      </div>

      <NavButton />
    </header>
  );
};

export default GlobalNav;
