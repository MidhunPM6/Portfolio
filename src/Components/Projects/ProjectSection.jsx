import React from 'react';
import firebase from '../assets/bootstrap.png';
import jobportal from '../assets/jobportal.png';
import weatherapp from '../assets/weatherapp.png';
import netflix from '../assets/netflix.png';
import moviebooking from '../assets/moviebooking.png';
import olx from '../assets/olx.png';

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
  
  

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen pt-20">
        <div>
          <h1 className="text-2xl font-semibold text-gray-200">Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mb-14 items-center ">
          {imgfile.map((image, index) => (
            <div
              key={index}
              className="flex flex-col max-w-xs w-full border border-gray-400 items-center text-white p-6 rounded-xl bg-gradient-to-r from-black to-slate-900 shadow-2xl shadow-black transition-all duration-300 hover:shadow-2xl hover:scale-105 mr-10"
            >
              <img
                src={image}
                alt={`Project Thumbnail ${index + 1}`}
                className="p-4  rounded-md shadow-xl transition-transform duration-300 hover:scale-110"
              />
              <h1 className="text-2xl font-bold text-blue-400 mt-4 transition-colors duration-300 hover:text-white">
                {projectNames[index]}
              </h1>
              <p className="text-sm text-gray-300 mt-2 mb-4 transition-opacity duration-300 hover:opacity-80">
                {descriptions[index]}
              </p>
              <button className="py-2 px-4 text-sm hover:bg-black hover:text-white bg-white text-black rounded-md shadow-xl shadow-blue-950 transition-all duration-300 transform hover:scale-105">
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
