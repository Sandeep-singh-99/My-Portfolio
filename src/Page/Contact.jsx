import React from "react";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center flex-col -mt-20 pb-20">
        <div className="pb-10">
          <h1 className="text-white text-6xl font-semibold">Contact</h1>
        </div>

        <div className="w-[50%] border border-purple-600 px-10 py-10 bg-[#111728] rounded-lg shadow-lg shadow-purple-700">
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-3xl font-semibold">Email Me</h2>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border  border-[#444853] px-3 py-3 rounded-md text-white font-semibold text-xl"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-[#444853] px-3 py-3 rounded-md text-white font-semibold text-xl"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent border border-[#444853] px-3 py-3 rounded-md text-white font-semibold text-xl"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-transparent border border-[#444853] px-3 py-3 rounded-md text-white font-semibold text-xl"
            />

            <button className="text-white text-xl font-semibold bg-[#8400ff] py-4 rounded-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
