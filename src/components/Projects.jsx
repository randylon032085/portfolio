import android1 from "../assets/video/android1.mp4";
import android2 from "../assets/video/android2.mp4";
import games from "../assets/images/games.jpg";
import android3 from "../assets/video/android3.mp4";
import android4 from "../assets/video/android4.mp4";
import threejs1 from "../assets/video/threejs1.mp4";
import threejs2 from "../assets/video/threejs2.mp4";
import web1 from "../assets/video/web1.mp4";
import web2 from "../assets/video/web2.mp4";
import web3 from "../assets/video/web3.mp4";
import web4 from "../assets/video/web4.mp4";
function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-cover flex items-center"
      style={{ backgroundImage: `url(${games})` }}
    >
      <div className="max-w-screen-lg mx-auto text-center ">
        <h2 className="text-4xl font-semibold">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Project 1 */}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 1 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={android1}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 1*/}

          {/* Project 2 */}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 2 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure>
              <video src={android2} controls autoPlay loop muted></video>
            </figure>
          </div>
          {/* end of project 2*/}

          {/* Project 3 */}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 3 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={android3}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 3*/}
          {/* Project 4*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 4 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={android4}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 4*/}
          {/* Project 5*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 5 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={threejs1}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 5*/}
          {/* Project 6*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 6 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={threejs2}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 6*/}
          {/* Project 7*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 7 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={web1}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 7*/}
          {/* Project 8*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 8 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={web2}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 8*/}
          {/* Project 9*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 9 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={web3}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 9*/}
          {/* Project 10*/}
          <div className="bg-gray-800 bg-opacity-40 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 10 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
            <figure className="">
              <video
                src={web4}
                controls
                autoPlay
                loop
                muted
                className="mt-2 rounded-md"
              ></video>
            </figure>
          </div>
          {/* end of project 10*/}
        </div>
      </div>
    </section>
  );
}

export default Projects;
