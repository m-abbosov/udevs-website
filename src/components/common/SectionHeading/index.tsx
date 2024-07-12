import React from "react";
import styles from "./style.module.css";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  type?: "description";
  size?: "lg" | "md";
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
  type,
  size = "md",
}) => {
  if (type === "description")
    return (
      <p className={`${styles.description} ${size === "lg" ? styles.lg : ""}`}>
        {children}
      </p>
    );
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>;
};

export default SectionHeading;
