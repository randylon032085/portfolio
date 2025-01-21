import { Link } from "react-router-dom";
import games from "../assets/images/games.jpg";

function Hero() {
  return (
    <section
      className="h-screen bg-cover text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${games})` }}
    >
      <div className="text-center p-4 bg-opacity-50 bg-black rounded-lg">
        <h1 className="text-5xl font-bold">Hello my name is Randylon</h1>
        <p className="mt-4 text-xl">Passionate Web Developer</p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover: bg-yellow-500 transition"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
