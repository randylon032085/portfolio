import image from "..//assets/images/games.jpg";
import NLC from "..//assets/images/NLC.png";
import UCC from "..//assets/images/ucc.png";
function Educational() {
  return (
    <section
      className="h-screen bg-cover flex justify-center gap-3 items-center text-white "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 text-3xl h-[500px] rounded-md p-4 list-none w-[400px]">
        <img src={NLC} alt="Image1" className="my-3.5" />
        <li className="list-none text-xl">
          Program: Interactive and Digital Technologies
        </li>
        <p className="text-sm my-6">
          *Previously called “Interactive Technologies and Game Design Diploma”
        </p>
        <p className="text-sm">
          The Diploma in Interactive and Digital Technologies prepares graduates
          to work in the growing information technology industry that combines
          internet, multimedia, networking, and software technologies,
          management and marketing skills.
        </p>
        <p className="text-xl my-6">Courses:</p>
        <li className="text-sm">Database Design</li>
        <li className="text-sm">Three.js</li>
        <li className="text-sm">Object Oriented Programming Java</li>
        <li className="text-sm">Android Mobile Application</li>
        <li className="text-sm">iOS App Development</li>
        <li className="text-sm">Human Computer Intercation </li>
        <p className="text-xl my-6">Training</p>
        <li className="text-sm">React: length 84 total of hrs</li>
      </div>

      <div className="bg-black bg-opacity-50 text-3xl h-[500px] rounded-md p-4 w-[400px] flex flex-col items-center">
        <img src={UCC} alt="" className="w-[100px]" />
        <li className="list-none text-xl">
          Program: Bachelor of Science in Office Administration
        </li>
        <p className="text-sm">
          The Bachelor of Science in Office Administration is a four-year
          program in which students would be prepared for a career in an
          outcome-focused, technology rich, professional environment. Courses in
          the curriculum are those that will thoroughly familiarize the students
          with current techniques in office practice and procedures,
          developments in office systems and technology, good team-working and
          management skills, and application of the principles of good human
          relations and communications to prepare them to be key players in
          day-to-day office operations. Lessons in writing routine reports and
          correspondence and speaking effectively to employers, employee, and
          the general public are provided in selected courses. The BSOA program
          also trains the students to work independently, without need for
          on-site supervision.
        </p>
      </div>
    </section>
  );
}

export default Educational;
