import React, { useEffect } from "react";

export default function Contact(props) {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return <div>Contact</div>;
}
