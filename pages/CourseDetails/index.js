import React from "react";
import { useRouter } from "next/router";

const CourseDetail = () => {
  const router = useRouter();
  const { courseId } = router.query; // Get the course ID from the URL

  // Placeholder data for the course details
  const courseData = {
    id: courseId,
    title: "Introduction to Solidity",
    description:
      " Learn the basics of Solidity and Remix in this introductory  course.",
    instructor: "Vairamuthu M",
    duration: "8 weeks",
    price: "2 GARI",
  };

  // Function to handle subscription button click
  const handleSubscribe = () => {
    // Logic to handle subscription, e.g. redirect to payment page or trigger an API call
    alert(`Subscribed to course "${courseData.title}"!`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Course Thumbnail */}
      <img
        src="/solidity.png"
        alt={courseData.title}
        className="w-full h-80 object-cover mb-8"
      />

      {/* Course Details */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {courseData.title}
      </h1>
      <p className="text-gray-600 mb-4">{courseData.description}</p>
      <p className="text-gray-600 mb-4">Instructor: {courseData.instructor}</p>
      <p className="text-gray-600 mb-4">Duration: {courseData.duration}</p>
      <p className="text-gray-600 mb-4">Price: {courseData.price}</p>

      {/* Subscribe Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
};

export default CourseDetail;
