import { useEffect, useState } from "react";


export default function AuthHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);
  if (user && user.accessToken && user.refreshToken) {
    return {
      Authorization: "Bearer " + user.accessToken,
      "refresh-token": user.refreshToken,
    };
  } else {
    return { Authorization: "" };
  }
}
