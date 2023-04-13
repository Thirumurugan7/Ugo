import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
              <Image
                className="h-8 w-8 rounded-full"
                src="/logo.png"
                width={60}
                height={60}
                alt="Logo"
              />
              <span className="ml-2 text-xl font-semibold text-white">
                <span className="font-[50px]">U</span>
                <span>go</span>{" "}
              </span>
            </a>
            <div className="hidden md:ml-6 md:flex md:space-x-4 items-center">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium items-center text-white text-gray-200 bg-gray-800"
              >
                Home
              </a>

              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-800"
              >
                Courses
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-800"
              >
                Join as an Instructor
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-800"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
              Contribute
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
