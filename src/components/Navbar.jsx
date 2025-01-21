import { Link, Links, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="space-x-4 flex gap-2">
          <li>
            <NavLink to="/" className="hover:text-yellow-400">
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
