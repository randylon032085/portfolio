import { Link, Links, NavLink } from "react-router-dom";

function Navbar() {
  //    <div className="flex flex-col items-center justify-center min-h-[150px] bg-gradient-to-br from-peach-500 to-indigo-500 p-4 rounded-lg">

  return (
    <nav className="bg-gradient-to-r from-black  to-gray-300 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="space-x-4 flex gap-2">
          <li>
            <NavLink to="/portfolio" className="hover:text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-yellow-400">
              About
            </NavLink>

            {/* <Links>Hello</Links> */}
          </li>
          <li>
            {" "}
            <NavLink to="/projects" className="hover:text-yellow-400">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-yellow-400">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
