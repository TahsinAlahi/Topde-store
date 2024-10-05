import ItemBar from "./ItemBar";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

function Navbar() {
  return (
    <nav className="grid grid-cols-3  ">
      <Logo />
      <MenuBar />
      <ItemBar />
    </nav>
  );
}

export default Navbar;
