import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className=" bg-blend-color-dodge bg-zinc-800 text-white  flex flex-col justify-center items-center">
        <div className="flex justify-center">
          {" "}
          <div className=" bg-zinc-800  my-3 mx-1 w-[200px]  h-[100px] p-2 hover:text-yellow-400 ">
            <ul>
              My contact Number
              <li>23333333333</li>
            </ul>
          </div>
          <div className=" bg-zinc-800 my-3 mx-1 list-none w-[200px]  h-[100px] p-2 hover:text-yellow-400">
            Character Reference
            <li>Ghosh Salilil</li>
            <li>Contact: 23333333333</li>
          </div>
          <div className=" bg-zinc-800 my-3 mx-1 list-none w-[200px] h-[100px]  p-2">
            Character Reference
            <li>Ghosh Salilil</li>
            <li>Contact: 23333333333</li>
          </div>
          <div className=" bg-zinc-800 my-3 mx-1 w-[200px] h-[100px]  p-2">
            <NavLink to="/education">Education</NavLink>
          </div>
        </div>
        <div>@copy2025 Randylon. All Rights Reserved</div>
      </nav>
    </>
  );
}

export default Footer;
