import React from "react";
import Button from "react-bootstrap/Button";

export default function MainButton({
  onClick,
  variant = "primary",
  ...otherProps
}) {
  return <Button onClick={onClick} variant={variant} {...otherProps} />;
}
