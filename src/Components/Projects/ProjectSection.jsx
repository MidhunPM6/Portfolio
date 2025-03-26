import React from 'react';
import firebase from '../assets/bootstrap.png';
import jobportal from '../assets/jobportal.png';
import weatherapp from '../assets/weatherapp.png';
import netflix from '../assets/netflix.png';
import moviebooking from '../assets/moviebooking.png';
import olx from '../assets/olx.png';
import { useEffect, useRef, useState } from "react";

const ProjectSection = () => {
  const imgfile = [jobportal, weatherapp, netflix, olx, moviebooking];
  const projectNames = ['Job Portal', 'Weather App', 'Netflix Clone', 'OLX Clone', 'Movie Booking'];
  const descriptions = [
    'An ongoing project to create a platform that connects employers and job seekers with advanced search filters and application tracking.',
    'An intuitive weather app providing real-time weather updates, forecasts, and interactive maps for your location and beyond.',
    'A sleek Netflix-inspired clone with a similar UI, allowing users to browse movies, view trailers, and explore categories.',
    'An OLX-inspired classified ads platform where users can buy, sell, and trade items with a user-friendly interface and secure messaging.',
    'An ongoing project to build an interactive movie booking application with dynamic seat selection, real-time availability, and smooth checkout options.',
  ];

  const projectSourceCode=["https://github.com/MidhunPM6/WorkBridge_Job_Portal-frond-end","https://github.com/MidhunPM6/WEATHER_APP","https://github.com/MidhunPM6/Netflix-Cone","https://github.com/MidhunPM6/OLX-clone","https://github.com/MidhunPM6/MovieBooking-webApp"]



  const [visibleCards, setVisibleCards] = useState([]); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
           
            return Array.from({ length: imgfile.length }, (_, i) => i);
          });
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  

  return (
    <>
      <div
      ref={sectionRef}
      className="flex flex-col items-center min-h-screen bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900" id='project'
    >
      <div className='flex-col place-items-center h-full '>
        <h1 className="text-2xl font-semibold  mb-10 md:pt-0 pt-8 text-lime-400">
          Projects
        </h1>
        <p className=' max-w-[90%] md:max-w-[90%] md:mb-10 text-gray-500 md:text-lg'>Welcome to my projects showcase! This section highlights some of the exciting applications and solutions I’ve built, demonstrating my expertise in full-stack development and passion for crafting user-focused, dynamic web applications. Each project is a step forward in my journey of learning, experimenting, and solving real-world problems using technologies like React.js, Node.js, MongoDB, and more. Whether it’s an innovative job portal, an intuitive movie booking system, or other creative endeavors, these projects reflect my commitment to delivering efficient and elegant solutions. Dive in and explore!</p>
      </div>

      <div className="flex flex-wrap gap-8 p-4 mb-10 justify-center">
  {imgfile.map((image, index) => (
    <div
      key={index}
      className={`flex flex-col mt-10 md:mt-0 max-w-[80vw] gap-2 md:max-w-[19vw] w-full  border border-gray-500 items-center text-white p-4 rounded-lg bg-gradient-to-r from-gray-950 to-slate-900 shadow-lg transition-transform duration-300  hover:scale-105 hover:z-10 ${
        visibleCards.includes(index)
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{
        transitionDelay: visibleCards.includes(index)
          ? `${index * 150}ms`
          : "0ms",
      }}
    >
      <img
        src={image}
        alt={`Project Thumbnail ${index + 1}`}
        className="w-full h-32 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-lg font-semibold text-gray-100 mt-3 transition-colors duration-300 hover:text-gray-400">
        {projectNames[index]}
      </h1>
      <p className="text-md text-gray-300 mt-1 mb-3 hover:text-lime-400">
        {descriptions[index]}
      </p>
      <button
        className="py-1 px-3 text-sm hover:bg-gray-200 mb-2 bg-gray-50 text-black rounded-sm shadow-md transition-transform duration-300 transform hover:scale-105"
        onClick={() => (window.location.href = projectSourceCode[index])}
      >
        Source Code
      </button>
    </div>
  ))}
</div>

    </div>
    </>
  );
};

export default ProjectSection;
