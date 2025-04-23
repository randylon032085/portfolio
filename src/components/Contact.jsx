import React, { useRef, useState } from "react";
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
      <section className="justify-center items-center md:flex md:flex-row  bg-cover text-black gap-5 sm:flex sm:flex-col ">
        <div className="bg-gray-700 rounded-md bg-opacity-20 mt-10 max-h-[600px] max-w-[650-px] items-center mb-20  text-white flex flex-col p-5">
          <p className="p-7 mt-11 max-w-[650px]">
            Hi, This is my API email.You can send me a message here if you want.
            Once you send it, it will go directly to my inbox, and I will
            respond as soon as possible. Thank you.
          </p>
          <p className="text-2xl p-2">What is Email.Js?</p>

          <article className="pl-7 pr-5 text-justify flex flex-wrap break-words max-w-[650px] ">
            <p>
              Email.jsis a JavaScript library designed to simplify sending
              emails directly from client-side JavaScript code. It provides an
              easy way to send emails using SMTP (Simple Mail Transfer Protocol)
              with just a few lines of code, without relying on server-side
              solutions. This can be particularly useful for web applications
              that need to send emails, like contact forms or user
              notifications. Here are a few key features of Email.js: SMTP
              Support: Allows sending emails using SMTP servers, which is a
              widely supported email protocol. Client-Side Integration: No need
              for server-side code, making it easier to integrate with frontend
              applications. Configuration Options: Offers various configuration
              options to customize email sending, including authentication and
              security settings. Attachments: Supports adding attachments to
              emails. Would you like to see an example of how to use Email.js?
            </p>
          </article>
        </div>

        <div className="mt-10 mb-20  max-h-[600px] flex flex-col items-center justify-center bg-opacity-20 w-[500px] bg-gray-700 rounded-md lg:max-h-[574px] 2xl:max-h-[526px]">
          <div className="bg-gray-400 bg-opacity-50 rounded-md h-[400px] w-[400px] flex  my-[200px] p-7">
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
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter Email"
                className="w-[200px] text-center h-[30px] rounded-md"
                required
              />
              <textarea
                name="message"
                placeholder="Input Message"
                className="w-[200px] text-center h-[100px] rounded-md"
                required
              />

              <button
                type="submit"
                value="Send"
                className="bg-yellow-400 active:bg-yellow-600 w-[178px] rounded-md invalid:text-red-600"
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
