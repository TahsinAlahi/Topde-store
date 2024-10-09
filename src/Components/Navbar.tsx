import useScrollHandler from "../Hooks/useScrollHandler";
import ItemBar from "./ItemBar";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

function Navbar() {
  const scroll = useScrollHandler(150);

  return (
    <nav
      className={`grid grid-cols-3 px-8 py-4 ${
        scroll
          ? "bg-white fixed z-10 top-0 text-black w-full transition duration-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <Logo />
      <MenuBar />
      <ItemBar
        className={scroll ? "pointer-events-none text-white select-none" : ""}
      />
    </nav>
  );
}

export default Navbar;
