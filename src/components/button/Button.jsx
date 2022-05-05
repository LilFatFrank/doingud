import { Button as MuiButton } from "@mui/material";
import "./Button.scss";

const Button = ({
  children,
  type,
  onClick,
  className,
  style,
  upperCase,
  lowerCase,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <MuiButton
      variant="contained"
      className={`button ${
        type === "secondary"
          ? "button-secondary"
          : type === "complementary"
          ? "button-complementary"
          : "button-primary"
      } ${className || ""}`}
      onClick={onClick}
      style={{
        ...style,
        textTransform: upperCase
          ? "uppercase"
          : lowerCase
          ? "lowercase"
          : "none"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
