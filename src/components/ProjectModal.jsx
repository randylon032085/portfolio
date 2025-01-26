function ProjectModal({ title, description, linkVideo, linkGitHub }) {
  //fixed inset-0 bg-black bg-opacity-50  items-center justify-center flex flex-col gap-2
  return (
    <div className="fixed inset-0 bg-black bg-opacity-0  items-center justify-center flex flex-col gap-2">
      <h1>{title}</h1>
      <p>{description}</p>
      <figure className="">
        <video
          src={linkVideo}
          controls
          autoPlay
          loop
          muted
          className="mt-2 rounded-md"
        ></video>
      </figure>
      <a href={linkGitHub}>Go to my github project</a>
    </div>
  );
}

export default ProjectModal;
