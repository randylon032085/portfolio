import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import games from "../assets/images/games.jpg";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1ajby8y", "template_bw32df3", form.current, {
        publicKey: "4SyUqHrm9Wc7BOkTC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="h-screen bg-cover text-black flex items-center justify-center"
      style={{ backgroundImage: `url(${games})` }}
    >
      <div className="flex flex-col items-center bg-opacity-50 bg-black rounded-md">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center p-6 gap-6 w-[500px] text-center"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Enter Name"
            className="w-[200px] text-center h-[30px] rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Email"
            className="w-[200px] text-center h-[30px] rounded-md"
          />
          <textarea
            name="message"
            placeholder="Input Message"
            className="w-[200px] text-center h-[100px] rounded-md"
          />
          <button
            type="submit"
            value="Send"
            className="bg-yellow-400 w-[150px] rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
