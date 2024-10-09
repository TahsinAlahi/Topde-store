import { HeartIcon, HamburgerIcon } from "../../public/icons/Icons";
import DropDownItem from "./DropDownItem";

function ItemBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-end items-start gap-4 ${className}`}>
      <DropDownItem
        title={
          <div>
            Cart <span>($100)</span>
          </div>
        }
      />
      <HeartIcon className="cursor-pointer" />
      <HamburgerIcon className="cursor-pointer" />
    </div>
  );
}

export default ItemBar;
