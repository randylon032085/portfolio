function ProjectModal({
  setModalIsOpen,
  linkVideo,
  platform,
  description,
  name,
  linkGitHub,
  imgPlatform,
}) {
  //fixed inset-0 bg-black bg-opacity-50  items-center justify-center flex flex-col gap-2

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-80 items-center justify-center flex flex-col gap-2 h-[800px] mx-auto w-[900px] mt-[20px] rounded-lg ">
      <span
        className="cursor-pointer bg-slate-400 w-[30px] text-center rounded-md mb-[20px] ml-[750px] shadow-black"
        onClick={() => setModalIsOpen(false)}
      >
        X
      </span>
      <p className="text-2xl">{name}</p>
      <p className="text-[15px]">powered by</p>
      <img src={imgPlatform} alt="" className="h-20 rounded-3xl" />
      <p className="p-10">{description}</p>
      <a href={linkGitHub} className="text-blue-700">
        Go to my Link in GitHub
      </a>

      <video
        src={linkVideo}
        className="h-[350px] w-[250px] rounded-lg"
        controls
        autoPlay
        muted
      ></video>
    </div>
  );
}

export default ProjectModal;
