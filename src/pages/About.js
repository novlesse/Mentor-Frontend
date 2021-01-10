import React, { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return <div>About</div>;
}
