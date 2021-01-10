import React, { useEffect } from "react";

export default function NotFound(props) {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return <div>NotFound</div>;
}
