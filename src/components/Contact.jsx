import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <>
      <section className="h-screen bg-cover text-black flex gap-5">
        <div className="bg-black bg-opacity-50 h-screen w-[1000px]  text-white flex flex-col">
          <p className="p-7 mt-11">
            Hi, This is my API email.js you can send me a message here if you
            want. Once you sent it it will directly to my email and will get
            back to you immediately thank you.
          </p>
          <p className="text-2xl p-7">What is Email.Js?</p>
          <article className="pl-7 pr-7 text-justify">
            Email.jsis a JavaScript library designed to simplify sending emails
            directly from client-side JavaScript code. It provides an easy way
            to send emails using SMTP (Simple Mail Transfer Protocol) with just
            a few lines of code, without relying on server-side solutions. This
            can be particularly useful for web applications that need to send
            emails, like contact forms or user notifications. Here are a few key
            features of Email.js: SMTP Support: Allows sending emails using SMTP
            servers, which is a widely supported email protocol. Client-Side
            Integration: No need for server-side code, making it easier to
            integrate with frontend applications. Configuration Options: Offers
            various configuration options to customize email sending, including
            authentication and security settings. Attachments: Supports adding
            attachments to emails. Would you like to see an example of how to
            use Email.js?
          </article>
        </div>
        <div className="h-screen flex flex-col items-center bg-opacity-50 w-[500px] bg-black rounded-md">
          <div className="bg-gray-400 bg-opacity-50 rounded-md h-[400px] w-[400px] flex  my-[200px]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex flex-col items-center p-6 gap-6 w-[500px] text-center y-[20px]"
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
        </div>
      </section>
    </>
  );
}

export default Contact;
