function ProjectModal({ setModalIsOpen }) {
  //fixed inset-0 bg-black bg-opacity-50  items-center justify-center flex flex-col gap-2
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90  items-center justify-center flex flex-col gap-2 h-[600px] mx-auto w-[500px] mt-[100px] rounded-lg ">
      <span className="cursor-pointer" onClick={() => setModalIsOpen(false)}>
        X
      </span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        eveniet minima reiciendis itaque dolorum repellendus dolores a? Nostrum
        sapiente voluptas, voluptate dolorum mollitia magni corporis optio
        dolorem, aliquid molestias doloremque!
      </p>
    </div>
  );
}

export default ProjectModal;
