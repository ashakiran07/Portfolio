"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      recipient: "aashahope01@gmail.com", // Your email address
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="github.com">
    <div className="rounded-full p-1">
      <Image
        src={GithubIcon}
        alt="Github Icon"
        style={{
          borderRadius: '50%',
          padding: '0.5rem',
          background: 'linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899)',
          transition: 'opacity 0.3s',
        }}
        className="hover:bg-slate-200"
      />
    </div>
  </Link>
  <Link href="linkedin.com">
    <div className="rounded-full p-1">
      <Image
        src={LinkedinIcon}
        alt="Linkedin Icon"
        style={{
          borderRadius: '50%',
          padding: '0.5rem',
          background: 'linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899)',
          transition: 'opacity 0.3s',
        }}
        className="hover:bg-slate-200"
      />
    </div>
  </Link>
</div>



      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                style={{
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                  borderImage: "linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899) 1",
                }}
                placeholder="hello@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                style={{
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                  borderImage: "linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899) 1",
                }}
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                style={{
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                  borderImage: "linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899) 1",
                }}
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white border border-white font-medium py-2.5 px-5 rounded-lg flex justify-center items-center w-full"
              >
             <span className="mr-2"><FontAwesomeIcon icon={faPaperPlane} size="sm"/></span>
             Send Message
            </button>

          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
