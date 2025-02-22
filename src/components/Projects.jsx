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
import android from "..//assets/images/android.jpg";
function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [video, setVideo] = useState();
  const [platform, setPlatform] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  const [linkGitHub, setLinkGitHub] = useState();
  const [imgPlatform, setImgPlatform] = useState();

  const Projects = [
    {
      id: 1,
      title: "Project 1",
      name: "Strawbery Recipe App",
      imgPlatform: `${android}`,
      description:
        "This application shows the recipe of strawberry. It is Connect with fellow strawberry enthusiasts, exchange tips, and share your own recipes. Whether you're looking for healthy breakfast options, sweet treats, or unique strawberry-infused dishes, the Strawberry Delight Recipes app has it all. 🍓✨. ",
      platform: "Android",
      linkVideo: `${android1}`,
      linkGitHub:
        "https://github.com/randylon032085/hoe2_android/tree/main/app/src",
    },
    {
      id: 2,
      title: "Project 2",
      name: "ASII CODE",
      imgPlatform: `${android}`,
      description:
        "ASCII, an acronym for American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. The game is random character you will received a different character and you will have to answer the ASCII code. You have only three lives so be careful for making an answer. ",
      platform: "Android",
      linkVideo: `${android4}`,
      linkGitHub:
        "https://github.com/randylon032085/assignment2android/tree/main/app/src",
    },
    {
      id: 3,
      title: "Project 3",
      name: "Night Tour Ticket App",
      description:
        "Discover the magic of nighttime adventures with the Night Sky Tour Ticket app, your one-stop solution for booking tickets to the most captivating night tours. Available on Android, our app offers a seamless and user-friendly experience, ensuring you never miss out on the thrill of exploring cityscapes under the stars.",
      platform: "Android",
      linkVideo: `${android3}`,
      linkGitHub:
        "https://github.com/randylon032085/hoe3_android/tree/main/app/src",
    },
    {
      id: 4,
      title: "Project 4",
      name: "GridView App",
      description:
        "GridView App: Organize Your World with Ease Enhance your productivity and creativity with the GridView app for Android, designed to help you visualize and manage your content efficiently. Whether you're organizing photos, arranging your favorite apps, or creating dynamic layouts, GridView offers a flexible and intuitive interface to bring your ideas to lifDiscover the magic of nighttime adventures with the Night Sky Tour Ticket app, your one-stop solution for booking tickets to the most captivating night tours. Available on Android, our app offers a seamless and user-friendly experience, ensuring you never miss out on the thrill of exploring cityscapes under the stars.",
      platform: "Android",
      linkVideo: `${android2}`,
      linkGitHub:
        "https://github.com/randylon032085/gridviews/tree/main1/app/src",
    },
    {
      id: 4,
      title: "Project 5",
      name: "Texture Animation",
      description:
        "This project is creating of texture material. Texture animation in Three.js allows you to animate textures on 3D objects, making them appear dynamic and more visually interesting. This can be achieved using various methods ",
      platform: "Android",
      linkVideo: `${threejs1}`,
      linkGitHub: "https://github.com/randylon032085/texture/tree/main/src",
    },
    {
      id: 4,
      title: "Project 6",
      name: "Texture Animation",
      description:
        "GridView App: Organize Your World with Ease Enhance your productivity and creativity with the GridView app for Android, designed to help you visualize and manage your content efficiently. Whether you're organizing photos, arranging your favorite apps, or creating dynamic layouts, GridView offers a flexible and intuitive interface to bring your ideas to lifDiscover the magic of nighttime adventures with the Night Sky Tour Ticket app, your one-stop solution for booking tickets to the most captivating night tours. Available on Android, our app offers a seamless and user-friendly experience, ensuring you never miss out on the thrill of exploring cityscapes under the stars.",
      platform: "Android",
      linkVideo: `${threejs2}`,
      linkGitHub:
        "https://github.com/randylon032085/icosahedrongeometry/blob/main/main.js",
    },
    {
      id: 4,
      title: "Project 7",
      name: "Texture Animation",
      description:
        "GridView App: Organize Your World with Ease Enhance your productivity and creativity with the GridView app for Android, designed to help you visualize and manage your content efficiently. Whether you're organizing photos, arranging your favorite apps, or creating dynamic layouts, GridView offers a flexible and intuitive interface to bring your ideas to lifDiscover the magic of nighttime adventures with the Night Sky Tour Ticket app, your one-stop solution for booking tickets to the most captivating night tours. Available on Android, our app offers a seamless and user-friendly experience, ensuring you never miss out on the thrill of exploring cityscapes under the stars.",
      platform: "Android",
      linkVideo: `${web1}`,
      linkGitHub:
        "https://github.com/randylon032085/icosahedrongeometry/blob/main/main.js",
    },
  ];
  const jp = JSON.stringify(Projects);
  console.log("PROJECTS", Projects);
  console.log("JSON TYPE", jp);

  return (
    <div
      className=""
      style={{
        // height: "400px",
        background: `url(${games})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="flex flex-wrap bg-cover text-white items-center justify-center gap-5 mt-10 mb-10">
        {Projects.map((el) => (
          <>
            <div
              key={el.id}
              className="text-center p-4 bg-opacity-30 bg-black rounded-lg w-[300px] h-[500px] gap-4 "
            >
              <div className="mt-3">
                <h1 className="text-1xl">{el.title}</h1>
                <p className="text-sm">Title: {el.name}</p>

                <button
                  onClick={() => {
                    setPlatform(el.platform);
                    setVideo(el.linkVideo);
                    setDescription(el.description);
                    setName(el.name);
                    setModalIsOpen(true);
                    setLinkGitHub(el.linkGitHub);
                    setImgPlatform(el.imgPlatform);
                  }}
                  className="bg-yellow-500 w-[178px] rounded-md mt-5"
                >
                  View Description
                </button>
                <video src={el.linkVideo} className="my-4"></video>
              </div>
            </div>
            {modalIsOpen && (
              <ProjectModal
                setModalIsOpen={setModalIsOpen}
                linkVideo={video}
                platform={platform}
                description={description}
                name={name}
                linkGitHub={linkGitHub}
                imgPlatform={imgPlatform}
              />
            )}
          </>
        ))}
      </section>
    </div>
  );
}

export default Projects;
