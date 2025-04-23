function About() {
  return (
    <section
      id="about"
      className="py-2 h-screen bg-cover text-white flex items-center justify-center "
    >
      <div className="max-w-screen-lg mx-auto text-center bg-gray-700 max-h-[600px] bg-opacity-20 p-6 rounded-md">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg inline-block text-justify">
          Hi! I’m Randylon, Im taking Iteractive Digital Technologies in Norther
          Light College in Fort st. John. I am passionate and detail-oriented
          software developer with a love for creating innovative solutions and
          building meaningful applications. With a solid foundation in
          JavaScript, Three.js, React, Android Studio, Java, Firebase. I have
          honed my skills in both frontend and backend development, allowing me
          to build scalable, performant, and user-friendly software.
        </p>
        <p className="mt-4 text-lg inline-block text-justify">
          I thrive on solving complex problems and collaborating with
          like-minded individuals to bring ideas to life. Whether it’s
          developing an intuitive web application, optimizing backend systems,
          or designing user interfaces that users love, I’m always eager to
          learn and improve. I believe that the best solutions come from
          continuously learning and applying new technologies while keeping the
          user experience at the forefront.
        </p>

        <p className="text-left">What I Do:</p>
        <li className="text-left">
          Full-Stack Development: I specialize in both frontend and backend
          technologies, with a focus on React, Node.js, Tailwind and etc.
        </li>
        <li className="text-left">
          Web & Mobile Application: Building responsive and intuitive apps that
          deliver seamless experiences
        </li>
        <li className="text-left">
          Problem-Solving & Optimization: I love tackling complex coding
          challenges and optimizing system for better performance
        </li>
        <li className="text-left">
          Collaboration: Working in agile teams to deliver high-quality,
          reliable software on time
        </li>
      </div>
    </section>
  );
}

export default About;
