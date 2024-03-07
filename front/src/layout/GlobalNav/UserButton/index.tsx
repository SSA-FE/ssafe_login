import classNames from "classnames";

import { UserButtonType } from "../../../../@types";
import { useNavigate } from "react-router-dom";

const UserButton = ({ user, logout }: UserButtonType) => {
    const navigate = useNavigate();

    if (user) {
        return (
            <div
                className={classNames(
                    "w-[147px]",
                    "h-[46px]",

                    "flex",
                    "justify-center",
                    "items-center",

                    "border-2",
                    "border-black",
                    "rounded-md",

                    "hover:bg-black",
                    "hover:text-white",
                    "transition-all",
                    "duration-200",

                    "text-[14px]",
                    "font-bold",
                    "text-black",

                    "cursor-pointer"
                )}
                onClick={logout}
            >
                로그아웃
            </div>
        )
    }
    return (
        <div
            className={classNames(
                "w-[147px]",
                "h-[46px]",

                "flex",
                "justify-center",
                "items-center",

                "bg-black",

                "rounded-md",

                "hover:bg-opacity-80",
                "transition-all",
                "duration-200",

                "text-white",
                "text-[14px]",
                "font-bold",

                "cursor-pointer"
            )}
            onClick={() => {
                navigate("/login");
            }}
        >
            로그인
        </div>
    )
}

export default UserButton