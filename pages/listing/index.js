import Image from "next/image";
import React from "react";
const CourseListingCarousel = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Featured Courses
        </h2>
        <div className="flex flex-wrap -mx-4 overflow-hidden">
          {/* Course Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 transform transition duration-300 hover:scale-105">
            <div className="bg-gray-100 p-4 h-full">
              {/* Course Image */}
              <img
                className="w-full h-40 object-cover mb-4 "
                src="/solidity.png"
                alt="Course 1"
                width={245}
                height={100}
              />
              {/* Course Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Introduction to Solidity
              </h3>
              {/* Course Description */}
              <p className="text-gray-600">
                Learn the basics of Solidity and Remix in this introductory
                course.
              </p>
              {/* Course Action */}
              <a
                href="/CourseDetails"
                className="block mt-4 text-blue-500 font-medium hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 transform transition duration-300 hover:scale-105">
            <div className="bg-gray-100 p-4 h-full">
              {/* Course Image */}
              <img
                className="w-full h-40 object-cover mb-4"
                src="/cairo.png"
                alt="Course 2"
              />
              {/* Course Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Cairo Bootcamp
              </h3>
              {/* Course Description */}
              <p className="text-gray-600">
                Master the skills to Write Cairo Smart Contract with this
                comprehensive bootcamp.
              </p>
              {/* Course Action */}
              <a
                href="#"
                className="block mt-4 text-blue-500 font-medium hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 transform transition duration-300 hover:scale-105">
            <div className="bg-gray-100 p-4 h-full">
              {/* Course Image */}
              <img
                className="w-full h-40 object-cover mb-4"
                src="/move.png"
                alt="Course 3"
              />
              {/* Course Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Move Masterclass
              </h3>
              {/* Course Description */}
              <p className="text-gray-600">
                Learn the principles of Move in this comprehensive masterclass.
              </p>
              {/* Course Action */}
              <a
                href="#"
                className="block mt-4 text-blue-500 font-medium hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseListingCarousel;
