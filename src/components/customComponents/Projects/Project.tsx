

import React from 'react';
import { Khand, Poppins } from 'next/font/google';
import CourseCard from './CourseCard';
import { courses } from './coursesData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});
const khandFont = Khand({
  subsets: ['latin'],
  weight: ['700']
});

export default function GitiProjects(): JSX.Element {
  return (
    <div className="relative bg-black" id="Projects">
      <div className="w-full text-center py-8" id="#Projects">
        <h1 className={`text-3xl md:text-4xl mt-4 text-[#ff0000] ${khandFont.className}`}>
          4–6 Weeks Summer Industrial Training with Live Projects
        </h1>
        <p className={`text-white text-sm md:text-lg ${poppins.className}`}>
          Gain Hands-On Experience in Trending Technologies and Boost Your Career Opportunities
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.courseName}
              tagline={course.tagline}
              image={course.image}
              price={course.price}
              originalPrice={course.originalPrice}
              paymentLink={course.paymentLink}
              brochurePdfUrl={course.brochurePdfUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}