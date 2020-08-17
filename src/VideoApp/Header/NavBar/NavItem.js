import React from "react";

const NavItem = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="nav__item">
      <a href="#" className="icon__button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </div>
  );
};

export default NavItem;
