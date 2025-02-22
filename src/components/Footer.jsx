import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className=" bg-blend-color-dodge bg-zinc-800 text-white  flex flex-col justify-center items-center">
        <div className="md:flex md:flex-row justify-center gap-10 sm:flex sm:flex-col xs:flex flex-col">
          {" "}
          <div className="text-[20px] bg-zinc-800  my-3 mx-1 w-[200px]  h-[100px] p-2 hover:text-yellow-400">
            <ul>
              My contact Number
              <li className="text-[15px]">Tel: +1 (236) 862-4403</li>
              <li className="text-[15px]">
                My Address: 8320 88ave Fort St. John. British Columbia Can.
              </li>
            </ul>
          </div>
          <div className="text-[20px] bg-zinc-800 my-3 mx-1 list-none w-[200px]  h-[100px] p-2 hover:text-yellow-400 ">
            Character Reference
            <li className="text-[15px]">Mr. Ghosh Salil</li>
            <li className="text-[15px]">Information Technology Instructor</li>
            <li className="text-[15px]">Northern Lights College</li>
            <li className="text-[15px]">Email: sghosh@nlc.bc.ca</li>
          </div>
          <div className="text-[20px] bg-zinc-800 my-3 mx-1 w-[200px] h-[100px]  p-2">
            <NavLink to="/education" className="hover:text-yellow-400">
              My Education
            </NavLink>
            <li className="text-[15px] list-none">
              <a
                href="https://www.nlc.bc.ca/"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Norther Lights College
              </a>
            </li>
            <li className="text-[15px] list-none">
              {" "}
              <a
                href="https://ucc-caloocan.edu.ph/"
                target="_blank"
                className="hover:text-yellow-400"
              >
                University of Caloocan City
              </a>
            </li>
          </div>
        </div>
        <div className="mt-20">@copy2025 Randylon. All Rights Reserved</div>
      </nav>
    </>
  );
}

export default Footer;
