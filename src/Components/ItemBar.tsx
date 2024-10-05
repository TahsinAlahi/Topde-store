import { HeartIcon, HamburgerIcon } from "../../public/icons/Icons";

function ItemBar() {
  return (
    <div className="flex justify-end items-start gap-4">
      <div>
        Cart <span>($120)</span>
      </div>
      <HeartIcon className="cursor-pointer" />
      <HamburgerIcon className="cursor-pointer" />
    </div>
  );
}

export default ItemBar;
