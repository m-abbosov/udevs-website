import css from "./style.module.css";
type RadioProps = React.HTMLAttributes<HTMLDivElement> & {
  checked: boolean;
};

const Radio: React.FC<RadioProps> = ({checked, ...props}) => {
  return (
    <div className={css.radio} {...props}>
      <div className={`${css.inner} ${checked ? css.checked : ""}`}></div>
    </div>
  );
};

export default Radio;
