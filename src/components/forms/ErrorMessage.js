import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <p className="error-message">{error}</p>;
}