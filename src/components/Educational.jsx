import image from "..//assets/images/games.jpg";
function Educational() {
  return (
    <section
      className="h-screen bg-cover flex justify-center gap-3 items-center text-white "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-gray-500 bg-opacity-50 text-3xl h-[500px] rounded-md p-4 list-none ">
        Norther Lights College
        <li className="text-2xl">Degree:</li>
      </div>

      <div className="bg-gray-500 bg-opacity-50 text-3xl h-[500px] rounded-md p-4 ">
        Universtiy of Caloocan
        <li></li>
      </div>
    </section>
  );
}

export default Educational;
