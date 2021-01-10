import React, { useEffect } from "react";

export default function NotFound(props) {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return <h1 className="vertical-center">Page Not Found</h1>;
}
