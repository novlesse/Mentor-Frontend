import React, { useEffect } from "react";

export default function Workshops(props) {
  useEffect(() => {
    document.title = "Workshops";
  }, []);
  
  return <div>Workshops</div>;
}
