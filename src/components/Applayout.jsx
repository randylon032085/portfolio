import { Outlet, useLocation } from "react-router-dom";
import games from "../assets/images/games.jpg";
import { useEffect, useState } from "react";
import Footer from "./Footer";
function Applayout() {
  const path = useLocation();
  const converted = path.pathname.split("/")[1];
  console.log(converted);
  const [bg, setBg] = useState(`url(${games})`);
  useEffect(
    function () {
      if (!(converted === "projects")) {
        setBg(`url(${games})`);
      } else {
        setBg("");
      }
    },
    [converted]
  );

  return (
    <div
      className="md:flex flex-col min-h-screen mt-auto bg-cover xs:flex min-h-screen mt-auto bg-cover"
      style={{ backgroundImage: bg, backgroundAttachment: "fixed" }}
    >
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
