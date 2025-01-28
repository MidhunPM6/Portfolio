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
      className="flex flex-col items-center bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen pt-20" id='project'
    >
      <div className='flex-col place-items-center text-gray-200'>
        <h1 className="text-2xl font-semibold  mb-10">
          Projects
        </h1>
        <p className=' max-w-[90%] md:max-w-[90%] md:mb-10 md:text-gray-500 md:text-lg'>Welcome to my projects showcase! This section highlights some of the exciting applications and solutions I’ve built, demonstrating my expertise in full-stack development and passion for crafting user-focused, dynamic web applications. Each project is a step forward in my journey of learning, experimenting, and solving real-world problems using technologies like React.js, Node.js, MongoDB, and more. Whether it’s an innovative job portal, an intuitive movie booking system, or other creative endeavors, these projects reflect my commitment to delivering efficient and elegant solutions. Dive in and explore!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mb-14 items-center">
      {imgfile.map((image, index) => (
  <div
    key={index}
    className={`flex flex-col max-w-xs w-full border border-gray-400 items-center text-white p-6 rounded-xl bg-gradient-to-r from-black to-slate-900 shadow-2xl shadow-black transform transition-all duration-300 hover:scale-105 ${
      visibleCards.includes(index)
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-20"
    }`}
    style={{
      transitionDelay: visibleCards.includes(index) ? `${index * 400}ms` : "0ms",
    }}
  >
    <img
      src={image}
      alt={`Project Thumbnail ${index + 1}`}
      className="p-4 rounded-md shadow-xl transition-transform duration-300 hover:scale-110"
    />
    <h1 className="text-2xl font-bold text-blue-400 mt-4 transition-colors duration-300 hover:text-white">
      {projectNames[index]}
    </h1>
    <p className="text-sm text-gray-300 mt-2 mb-4 transition-opacity duration-300 hover:opacity-80">
      {descriptions[index]}
    </p>
    <button
      className="py-2 px-4 text-sm hover:bg-black hover:text-white bg-white text-black rounded-md shadow-xl shadow-blue-950 transition-transform duration-300 transform hover:scale-105"
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
