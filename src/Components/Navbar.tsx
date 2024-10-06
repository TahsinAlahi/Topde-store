import useScrollHandler from "../Hooks/useScrollHandler";
import ItemBar from "./ItemBar";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

function Navbar() {
  const scroll = useScrollHandler();
  console.log(scroll);

  return (
    <nav className="grid grid-cols-3 ">
      <Logo />
      <MenuBar />
      <ItemBar />
    </nav>
  );
}

export default Navbar;
