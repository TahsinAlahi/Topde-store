import React, { useState } from "react";

type DropDownItemProps = {
  title: string | React.ReactNode;
  children?: React.ReactNode;
};

function DropDownItem({ title, children }: DropDownItemProps) {
  const [open, setOpen] = useState(false);

  // none
  //

  const hoverClass = open
    ? "opacity-100 translate-y-0 pointer-events-auto "
    : "opacity-0 -translate-y-12 pointer-events-none ";

  return (
    <li
      className="list-none relative  "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="font-light pb-7 cursor-pointer">{title}</div>
      {<div className={` menu-dropdown ${hoverClass}`}>{children}</div>}
    </li>
  );
}

export default DropDownItem;
