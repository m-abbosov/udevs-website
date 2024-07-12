import css from "./style.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "lg" | "md";
};

const Button: React.FC<ButtonProps> = ({children, size = "md", ...props}) => {
  const classNames = `${css.button} ${size === "lg" ? css.buttonLg : ""}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
