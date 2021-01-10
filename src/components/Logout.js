import React, { useEffect } from "react";

export default function Logout(props) {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/";
  }, []);

  return <></>;
}
