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
import { useState } from "react";
import ProjectModal from "./ProjectModal";
function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const Projects = [
    {
      title: "Project1",
      description: "Strawbery Recipe App",
      platform: "Android",
      linkVideo: `${android1}`,
      linkGitHub:
        "https://github.com/randylon032085/hoe2_android/releases/tag/v1.0",
    },
    {
      title: "Project2",
      description: "Night Tour Ticket App",
      platform: "Android",
      linkVideo: `${android3}`,
      linkGitHub:
        "https://github.com/randylon032085/hoe3_android/releases/tag/v1.0",
    },
    {
      title: "Project3",
      description: "ASCII Games",
      platform: "Android",
      linkVideo: `${android4}`,
      linkGitHub:
        "https://github.com/randylon032085/assignment2android/releases/tag/v1.0",
    },
    {
      title: "Project4",
      description: "ASCII Games",
      platform: "Android",
      linkVideo: `${android2}`,
      linkGitHub:
        "https://github.com/randylon032085/assignment2android/releases/tag/v1.0",
    },
    {
      title: "Project4",
      description: "ASCII Games",
      platform: "Android",
      linkVideo: `${android2}`,
      linkGitHub:
        "https://github.com/randylon032085/assignment2android/releases/tag/v1.0",
    },
  ];
  console.log(Projects);
  return (
    <div
      className="h-screen py-2 bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${games})` }}
    >
      <section>
        <div className="flex gap-[160px] max-w-screen-lg mx-auto text-center ">
          {Projects.map((el) => (
            <>
              <div className="w-[150px] flex-grow">
                <div className="bg-gray-800 bg-opacity-40 h-[400px] w-[300px]  text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold">{el.title} </h3>
                  <p className="mt-4">{el.description}</p>
                  <p>Platform: {el.platform}</p>
                  {/* <a
                    href={el.linkGitHub}
                    target="_blank"
                    className="mt-4 inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg"
                  >
                    View Project
                  </a> */}
                  <button
                    className="bg-yellow-500 w-[178px] rounded-md"
                    onClick={() => setModalIsOpen(true)}
                  >
                    View Details
                  </button>
                  <figure className="">
                    <video
                      src={el.linkVideo}
                      controls
                      autoPlay
                      loop
                      muted
                      className="mt-2 rounded-md"
                    ></video>
                  </figure>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* {modalIsOpen === true ? (
          <ProjectModal setModalIsOpen={setModalIsOpen} />
        ) : (
          ""
        )} */}
        {modalIsOpen && <ProjectModal setModalIsOpen={setModalIsOpen} />}
      </section>
    </div>
  );
}

export default Projects;
