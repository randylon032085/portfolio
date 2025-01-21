import games from "../assets/images/games.jpg";
function About() {
  return (
    <section
      id="about"
      className="py-2 h-screen bg-cover text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${games})` }}
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg inline-block">
          Hi! I’m Randylon, graduate of Iteractive Digital Technologies. I ams
          passionate and detail-oriented software developer with a love for
          creating innovative solutions and building meaningful applications.
          With a solid foundation in JavaScript, React, Android Studio, Java,
          Supabase. I have honed my skills in both frontend and backend
          development, allowing me to build scalable, performant, and
          user-friendly software.
        </p>
        <p className="mt-4 text-lg inline-block">
          I thrive on solving complex problems and collaborating with
          like-minded individuals to bring ideas to life. Whether it’s
          developing an intuitive web application, optimizing backend systems,
          or designing user interfaces that users love, I’m always eager to
          learn and improve. I believe that the best solutions come from
          continuously learning and applying new technologies while keeping the
          user experience at the forefront.
        </p>
        <p className="">What I Do:</p>
      </div>
    </section>
  );
}

export default About;
