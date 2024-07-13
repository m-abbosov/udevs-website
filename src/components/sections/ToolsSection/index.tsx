"use client";
import Radio from "@/components/common/Radio";

import SectionHeading from "@/components/common/SectionHeading";
import {technologies, tools} from "@/utils/data";
import Image from "next/image";
import {useState} from "react";
import css from "./style.module.css";

enum TechTypes {
  FRONTEND,
  BACKEND,
  DEVOPS,
  TESTING,
  UXUI,
  INFRASTRUCTURE,
  MOBILE,
}

interface ClassNamesType {
  id: number;
  title: string;
  type: number;
  icon: any;
}

const ToolsSection = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const classNames = (item: ClassNamesType) => {
    if (checkedIndex === null || checkedIndex === item.type + 1) {
      switch (item.type) {
        case TechTypes.FRONTEND:
          return css.frontend;
        case TechTypes.BACKEND:
          return css.backend;
        case TechTypes.DEVOPS:
          return css.devops;
        case TechTypes.TESTING:
          return css.testing;
        case TechTypes.UXUI:
          return css.uxui;
        case TechTypes.INFRASTRUCTURE:
          return css.infrastructure;
        case TechTypes.MOBILE:
          return css.mobile;
        default:
          break;
      }
    }
  };

  return (
    <section className={css.section}>
      <div className="container">
        <SectionHeading>Tools</SectionHeading>
        <div className={css.tools}>
          {tools.map((tool, index) => (
            <div
              onClick={() => {
                if (index + 1 === checkedIndex) {
                  setCheckedIndex(null);
                } else {
                  setCheckedIndex(index + 1);
                }
              }}
              className={css.tool}
              key={tool}
            >
              <Radio checked={index + 1 === checkedIndex} />
              <span className={css.toolTitle}>{tool}</span>
            </div>
          ))}
        </div>
        <div className={css.technologies}>
          {technologies.map((item) => (
            <div
              className={`${css.technologyItem} ${classNames(item)}`}
              key={item.id}
            >
              <Image className={css.technologyIcon} src={item.icon} alt="" />
              <span className={css.technologyTitle}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
