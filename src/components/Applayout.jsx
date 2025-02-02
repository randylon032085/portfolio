import { Outlet, useLocation } from "react-router-dom";
import games from "../assets/images/games.jpg";
import { useEffect, useState } from "react";
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
      className="flex flex-col min-h-screen mt-auto bg-cover"
      style={{ backgroundImage: bg }}
    >
      <Outlet />
    </div>
  );
}

export default Applayout;
