import React, { useState } from "react";

type DropDownItemProps = {
  title: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  dropDownClassName?: string;
};

function DropDownItem({
  title,
  children,
  className = "",
  dropDownClassName = "",
}: DropDownItemProps) {
  const [open, setOpen] = useState(false);

  const hoverClass = open
    ? "opacity-100 translate-y-0 pointer-events-auto "
    : "opacity-0 -translate-y-12 pointer-events-none ";

  return (
    <li
      className={`list-none relative ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="font-light mb-2 cursor-pointer">{title}</div>
      <div className={`menu-dropdown ${hoverClass} ${dropDownClassName}`}>
        {children}
      </div>
    </li>
  );
}

export default DropDownItem;
