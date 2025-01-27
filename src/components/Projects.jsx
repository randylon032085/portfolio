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
    <div>
      <section
        className="flex flex-wrap h-screen bg-cover text-white items-center justify-center gap-2"
        style={{ backgroundImage: `url(${games})` }}
      >
        {Projects.map((el) => (
          <>
            <div className="text-center p-4 bg-opacity-50 bg-black rounded-lg w-[300px] h-[500px] ">
              <div>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <p>Platform: {el.platform}</p>
                <video src={el.linkVideo}></video>
              </div>
            </div>
          </>
        ))}
        {modalIsOpen && <ProjectModal setModalIsOpen={setModalIsOpen} />}
        <button></button>
      </section>
    </div>
  );
}

export default Projects;
