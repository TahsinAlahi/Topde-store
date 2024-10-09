import DropDownItem from "./DropDownItem";

function MenuBar() {
  return (
    <div className="flex justify-between items-start  min-w-96 text-inherit">
      <DropDownItem dropDownClassName="left-0" title="Home">
        <div>Main Home</div>
        <div>Minimal Home</div>
        <div>Masonry Home</div>
        <div>Classic Home</div>
      </DropDownItem>
      <DropDownItem dropDownClassName="left-0" title="Pages">
        <div>About Us</div>
        <div>Contact</div>
        <div>FAQ</div>
        <div>Privacy Policy</div>
      </DropDownItem>
      <DropDownItem dropDownClassName="left-0" title="Shop">
        <div>Left Sidebar</div>
        <div>With Filter</div>
        <div>Masonry – Grid</div>
        <div>Masonry – Wide</div>
      </DropDownItem>
      <DropDownItem dropDownClassName="left-0" title="Portfolio">
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
        <div>Project 4</div>
      </DropDownItem>
      <DropDownItem dropDownClassName="left-0" title="Blog">
        <div>Latest Posts</div>
        <div>Categories</div>
        <div>Archives</div>
        <div>Popular Posts</div>
      </DropDownItem>
      <DropDownItem dropDownClassName="left-0" title="Elements">
        <div>Buttons</div>
        <div>Forms</div>
        <div>Icons</div>
        <div>Typography</div>
      </DropDownItem>
    </div>
  );
}

export default MenuBar;
