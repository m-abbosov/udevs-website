"use client";

import css from "./style.module.css";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import {projects} from "@/utils/projectsData";
import {services} from "@/utils/servicesData";
import Image from "next/image";
import {useState} from "react";
import ArrowDown from "../../../public/icons/arrow-icon.svg";
import EngFlag from "../../../public/icons/eng.svg";
import Logo from "../../../public/icons/logo.svg";
import RuFlag from "../../../public/icons/rus.svg";
import Button from "../common/Button";

function Header() {
  const [activeId, setActiveId] = useState("");

  useIntersectionObserver(setActiveId);

  const servicesSorted = services
    .filter((_, index) => index !== 1)
    .sort((a, b) => a.title.localeCompare(b.title));

  console.log(activeId);

  return (
    <header className={`${css.header} fadeToBottom`}>
      <div className="container">
        <div className=" flex items-center justify-between">
          <a href="/">
            <Image className="w-24" src={Logo} alt="" />
          </a>
          <nav className="flex items-center gap-8">
            <a
              className={`${css.link} ${
                activeId === "directs" ? css.active : ""
              }`}
              href=""
            >
              Direction
            </a>
            <a
              className={`${css.link} ${activeId === "team" ? css.active : ""}`}
              href=""
            >
              Command
            </a>
            <button
              className={`${css.link} ${
                activeId === "services" ? css.active : ""
              } ${css.services}`}
              type="button"
            >
              Services
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdown}>
                <p className={css.dropdownTitle}>Services</p>
                {servicesSorted.map((item) => (
                  <li key={item.id} className={css.dropdownItem}>
                    <a href="/mobile" className={css.dropdownLink}>
                      <div className={css.dropdownIcon}>
                        <Image
                          width={20}
                          height={20}
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>
                      <span className={css.dropdownItemTitle}>
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </button>
            <a
              className={`${css.link} ${
                activeId === "tools" ? css.active : ""
              }`}
              href=""
            >
              Tools
            </a>
            <a
              className={`${css.link} ${
                activeId === "clients" ? css.active : ""
              }`}
              href=""
            >
              Clients
            </a>
            <button
              className={`${css.link} ${
                activeId === "portfolio" ? css.active : ""
              } ${css.portfolio}`}
            >
              Portfolio
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdownPortfolio}>
                <p className={css.dropdownTitle}>Portfolio</p>

                {projects.map((item) => (
                  <li key={item.id} className={css.dropdownItem}>
                    <a href="/mobile" className={css.dropdownLink}>
                      <div
                        className={css.dropdownIcon}
                        style={{background: item.bgColor, color: item.color}}
                      >
                        {item.name.slice(0, 1)}
                      </div>
                      <span className={css.dropdownItemTitle}>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </button>
            <button className={`${css.link} ${css.lang}`}>
              Language
              <Image src={ArrowDown} alt="" />
              <ul className={css.dropdownLang}>
                <li>
                  <a className={css.langItem} href="">
                    <Image src={RuFlag} alt="Russian" className={css.flag} />
                    <span className={css.langText}>Рус</span>
                  </a>
                </li>
                <li>
                  <a className={css.langItem} href="">
                    <Image
                      src={EngFlag}
                      alt="United kingdom"
                      className={css.flag}
                    />
                    <span className={css.langText}>Eng</span>
                  </a>
                </li>
              </ul>
            </button>
            <Button>Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
