function Footer() {
  const footerDivClass =
    "text-gray-500 flex items-start justify-center flex-col gap-2 text-sm";
  const titleClass = "text-black text-xl tracking-widest mb-4 font-thin";

  return (
    <footer className="h-[50vh] bg-white pt-20  px-24">
      <div className="grid grid-cols-4 pb-20">
        <div className={footerDivClass}>
          <h4 className={titleClass}>Customer Service</h4>
          <p>Help & Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Online Stores</p>
          <p>Terms & Conditions</p>
        </div>
        <div className={footerDivClass}>
          <h4 className={titleClass}>Company</h4>

          <p>What We Do</p>
          <p>Available Services</p>
          <p>Latest Posts</p>
          <p>FAQs</p>
        </div>
        <div className={footerDivClass}>
          <h4 className={titleClass}>Social Media</h4>

          <p>Twitter</p>
          <p>Instagram</p>
          <p>Tumblr</p>
          <p>Pinterest</p>
        </div>
        <div className={footerDivClass}>
          <h4 className={titleClass}>Profile</h4>

          <p>My Account</p>
          <p>Checkout</p>
          <p>Order Tracking</p>
          <p>Help & Support</p>
        </div>
      </div>
      <div className="text-gray-500 text-sm font-thin flex items-center justify-center py-4  border-t-2 border-gray-200">
        © {new Date().getFullYear()} Topde Interactive, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
