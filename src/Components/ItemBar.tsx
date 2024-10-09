import { HeartIcon, HamburgerIcon } from "../../public/icons/Icons";
import CartItems from "./CartItems";
import DropDownItem from "./DropDownItem";

function ItemBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-end items-start gap-4 ${className}`}>
      <DropDownItem
        dropDownClassName="right-0"
        title={
          <div>
            Cart <span>($100)</span>
          </div>
        }
      >
        <CartItems />
      </DropDownItem>
      <HeartIcon className="cursor-pointer" />
      <HamburgerIcon className="cursor-pointer" />
    </div>
  );
}

export default ItemBar;
