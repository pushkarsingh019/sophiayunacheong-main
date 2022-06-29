import React from "react";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <div>Sophia Yuna Cheong, {year}</div>
      <div>Designed and Developed by Pushkar Singh</div>
    </footer>
  );
}
