import React from "react";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <div className="footer bg-gray-800 text-white">
      <p> &copy; {date} AW</p>
    </div>
  );
}

export default Footer;
