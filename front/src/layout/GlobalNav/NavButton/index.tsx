import classNames from "classnames";
import UserButton from "../UserButton";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ax from "../../../util/api";
import { useAppDispatch, useAppSelector } from "../../../store";
import { login, logout } from "../../../store/reducer";

const NavButton = () => {
  const isUser = useAppSelector((state) => state.isUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const acc = localStorage.getItem("accessToken");
    const ref = localStorage.getItem("refreshToken");

    if (!acc || !ref) {
      return;
    }

    ax.get("/test", {
      headers: {
        "Authorization": `Bearer ${acc}`,
        "refresh-token": ref,
      }

    }).then(() => {
      dispatch(login());
    }).catch((e) => {
      console.error(e);
    })
  }, []);

  const handleLogout = () => {
    const res = window.confirm("로그아웃 하시겠습니까?");

    if (!res) {
      return;
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());

    alert("로그아웃 되었습니다.");
    navigate(0);
  }

  return (
    <div className={classNames(
      'flex',
      'justify-between',
      'items-center',

      'gap-x-2',
    )}>
      <UserButton user={isUser} logout={handleLogout} />
      {isUser && (
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
            alert("아직 작성할 수 없습니다!");
          }}
        >
          바로 작성하기
        </div>)}
    </div>

  );
};

export default NavButton;
