import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className=" bg-blend-color-dodge bg-gray-500 text-white  flex">
        <div className="bg-gray-500  my-3 mx-1 w-[200px]  h-[100px] p-2 hover:text-yellow-400 ">
          <ul>
            My contact Number
            <li>23333333333</li>
          </ul>
        </div>

        <div className="bg-gray-500 my-3 mx-1 list-none w-[200px]  h-[100px] p-2 hover:text-yellow-400">
          Character Reference
          <li>Ghosh Salilil</li>
          <li>Contact: 23333333333</li>
        </div>
        <div className="bg-gray-500 my-3 mx-1 list-none w-[200px] h-[100px]  p-2">
          Character Reference
          <li>Ghosh Salilil</li>
          <li>Contact: 23333333333</li>
        </div>
        <div className="bg-gray-500 my-3 mx-1 w-[200px] h-[100px]  p-2">
          <NavLink to="/education">Education</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Footer;
