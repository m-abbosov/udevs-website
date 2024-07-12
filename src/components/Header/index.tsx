import css from "./style.module.css";

import Image from "next/image";
import ArrowDown from "../../../public/icons/arrow-icon.svg";
import Logo from "../../../public/icons/logo.svg";
import Button from "../common/Button";

function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <div className=" flex items-center justify-between">
          <a href="/">
            <Image className="w-24" src={Logo} alt="" />
          </a>
          <nav className="flex items-center gap-8">
            <a className={css.link} href="">
              Direction
            </a>
            <a className={css.link} href="">
              Command
            </a>
            <a
              className={css.link}
              href=""
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
            >
              Services
              <Image src={ArrowDown} alt="" />
            </a>
            {/* <ul className="header-module--dropdown--26q1g">
            <p className="header-module--title--bRpng">Services</p>
            <li className="header-module--dropdownItem--2jeHu">
              <a href="/mobile">
                <Image src="" alt="Mobile development" />
                <span>Development of mobile applications</span>
              </a>
            </li>
            <li className="header-module--dropdownItem--2jeHu">
              <a href="/erp">
                <Image src="" alt="ERP systems" />
                <span>Development and implementation ERP systems</span>
              </a>
            </li>
            <li className="header-module--dropdownItem--2jeHu">
              <a href="/design">
                <Image src="" alt="UX/UI design" />
                <span>User interface, User experience design</span>
              </a>
            </li>
            <li className="header-module--dropdownItem--2jeHu">
              <a href="/consulting">
                <Image src="" alt="IT Consulting" />
                <span>IT consulting</span>
              </a>
            </li>
            <li className="header-module--dropdownItem--2jeHu">
              <a href="/optimization">
                <Image src="" alt="Optimization" />
                <span>Optimization IT consulting infrastructure</span>
              </a>
            </li>
          </ul> */}
            <a className={css.link} href="">
              Tools
            </a>
            <a className={css.link} href="">
              Clients
            </a>
            <a className={css.link} href="">
              Portfolio
              <Image src={ArrowDown} alt="" />
            </a>
            <a className={css.link} href="">
              Language
              <Image src={ArrowDown} alt="" />
            </a>
            <Button>Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
