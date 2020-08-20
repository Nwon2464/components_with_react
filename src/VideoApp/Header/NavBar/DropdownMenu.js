import React, { useRef, useState, useEffect, useCallback } from "react";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginModal from "../LoginModal";
import LoginModalForm from "../LoginModalForm";
import LanguageIcon from "@material-ui/icons/Language";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { CSSTransition } from "react-transition-group";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { FaLongArrowAltUp } from "react-icons/fa";
const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  console.log(dropdownRef);
  // React.useEffect(() => {
  //   // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  //   dropdownRef.current.onclose = () => console.log("CLOSED!");
  //   return () => {
  //     dropdownRef.current.onclose();
  //   };
  // }, []);

  // const dropdownRef = useCallback(node => {
  //   if (node !== null) {
  //     //fetch(...)   load data
  //   }
  // },[]);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    const modalRef = React.useRef();

    const openModal = (event) => {
      const container = document.getElementsByClassName("menu__item")[2];
      if (
        container === event.currentTarget &&
        container.hasChildNodes(event.currentTarget)
      ) {
        console.log("YEs you are good togo");
        modalRef.current.openModal();
      }
    };

    const checkLoggedOrNot = (event) => {
      if (!props.logged) {
        props.goToMenu && setActiveMenu(props.goToMenu);
        openModal(event);
      } else {
        props.goToMenu && setActiveMenu(props.goToMenu);
      }
    };

    const logout = (e) => {
      if (props.children === "Log Out") {
        props.signOut();
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
          style={{
            backgroundColor: props.backgroundcolor && props.backgroundcolor,
          }}
          onClick={(e) => {
            checkLoggedOrNot(e);
            logout();
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
  console.log("--->thisis dropdownMenu", dropdownRef);
  return (
    <div
      // style={{ height: menuHeight }}
      // ref={dropdownRef}
      className="dropdown__"
    >
      <CSSTransition
        in={activeMenu === "main"}
        classNames="menu__primary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          {props.allContents.map((contents, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownItem
                  // onSignOut={props.onSignOut}
                  logged={contents.logged ? contents.logged : ""}
                  leftIcon={contents.leftIcon}
                  goToMenu={contents.goToMenu ? contents.goToMenu : ""}
                  rightIcon={contents.rightIcon}
                  signOut={props.onSignOut}
                >
                  {contents.content}
                </DropdownItem>
              </React.Fragment>
            );
          })}

          {/* <DropdownItem
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
          <DropdownItem leftIcon={<ExitToAppIcon />}>Log In</DropdownItem> */}
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        classNames="menu__secondary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu__">
          {props.languages.map((language, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownItem
                  backgroundcolor={
                    language.backgroundcolor ? language.backgroundcolor : ""
                  }
                  logged={language.logged ? language.logged : ""}
                  leftIcon={language.leftIcon ? language.leftIcon : ""}
                  goToMenu={language.goToMenu ? language.goToMenu : ""}
                >
                  {language.language}
                </DropdownItem>
              </React.Fragment>
            );
          })}

          {/* <DropdownItem
            backgroundcolor="#EFEFF1"
            leftIcon={<ChevronLeftIcon />}
            goToMenu="main"
          >
            Language
          </DropdownItem>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Dansk</DropdownItem>
          <DropdownItem>Deutsch</DropdownItem>
          <DropdownItem>English - UK</DropdownItem>
          <DropdownItem>Español - España</DropdownItem>
          <DropdownItem>中文 简体</DropdownItem>
          <DropdownItem>日本語</DropdownItem>
          <DropdownItem>한국어</DropdownItem> */}
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
