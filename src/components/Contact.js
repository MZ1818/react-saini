import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-xl">Contact Us Page</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          className="px-2 py-1 m-2 border border-black rounded-md"
        />
        <input
          type="text"
          placeholder="message"
          className="px-2 py-1 m-2 border border-black rounded-md"
        />
        <button className="bg-black text-white px-2 py-2 m-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
