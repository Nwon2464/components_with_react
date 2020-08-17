import React, { useRef, useState, useEffect } from "react";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginModal from "../LoginModal";
import LoginModalForm from "../LoginModalForm";
import LanguageIcon from "@material-ui/icons/Language";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { CSSTransition } from "react-transition-group";
const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  React.useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    const modalRef = React.useRef();

    const openModal = (event) => {
      const container = document.getElementsByClassName("menu__item")[2];
      if (container === event.target && container.hasChildNodes(event.target)) {
        console.log("YEs you are good togo");
        modalRef.current.openModal();
      }
    };

    return (
      <>
        <LoginModal ref={modalRef}>
          <i
            onClick={() => modalRef.current.close()}
            className="window__icon large window close icon"
          ></i>
          <LoginModalForm />
        </LoginModal>

        <div
          onClick={(e) => {
            props.goToMenu && setActiveMenu(props.goToMenu);
            openModal(e);
          }}
          className="menu__item"
        >
          <span className="icon__button">{props.leftIcon}</span>
          {props.children}
          <span className="icon__right">{props.rightIcon}</span>
        </div>
      </>
    );
  };
  return (
    <div className="dropdown__">
      <CSSTransition
        in={activeMenu === "main"}
        classNames="menu__primary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          <DropdownItem
            rightIcon={<ChevronRightIcon />}
            leftIcon={<LanguageIcon />}
            goToMenu="language"
          >
            Language
          </DropdownItem>
          <DropdownItem
            leftIcon={<Brightness2OutlinedIcon />}
            rightIcon={<ToggleOffOutlinedIcon />}
          >
            Dark Theme
          </DropdownItem>
          <DropdownItem leftIcon={<ExitToAppIcon />}>Log In</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "language"}
        classNames="menu__secondary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          <DropdownItem leftIcon={<ChevronRightIcon />} goToMenu="main">
            Language
          </DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
          <DropdownItem>settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
