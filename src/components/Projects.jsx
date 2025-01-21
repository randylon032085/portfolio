import android1 from "../assets/video/android1.mp4";
import android2 from "../assets/video/android2.mp4";
function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-semibold">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Project 1 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg">
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
          <div className="bg-gray-800 text-white p-6 rounded-lg">
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
          <div className="bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 3 </h3>
            <p className="mt-4">Description of the Project goes here</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
            >
              View Project
            </a>
          </div>
          {/* end of project 3*/}
        </div>
      </div>
    </section>
  );
}

export default Projects;
