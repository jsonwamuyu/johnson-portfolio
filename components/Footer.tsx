import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900  ">
      <div className="container text-white text-center items-center py-4 mt-10 text-sm justify-between flex flex-col md:flex-row">
        <div>
          <p>
            © {new Date().getFullYear()} Johnson Muchiri. All Rights Reserved.
          </p>
        </div>

        <div>
          <a
            href="https://twitter.com/johnson_muchiri"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <span className="mx-2">•</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
