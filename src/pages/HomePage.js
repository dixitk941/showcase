// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Challenges from '../components/Challenges'; // Import Challenges component

const HomePage = () => {
  const projects = [
    {
      name: "MentorConnect",
      link: "https://mentorconnectt.vercel.app/",
      video: "https://firebasestorage.googleapis.com/v0/b/notesapp-dixitk941.appspot.com/o/mentor.mp4?alt=media&token=779afb05-4b0a-4d2b-96a8-dfff9378f250",
      details: "MentorConnect is the ultimate platform to connect with mentors, exchange knowledge, and grow your skills. It's like having a personal guru, minus the incense! 🧘‍♂️"
    },
    {
      name: "EveSecure",
      link: "https://evesecure.vercel.app/login",
      video: "https://firebasestorage.googleapis.com/v0/b/notesapp-dixitk941.appspot.com/o/evesecure.mp4?alt=media&token=74c0a5ac-6012-4eba-a743-2d055b4525de",
      details: "EveSecure is under construction but promises to be the fortress of digital safety. It's like having a digital bodyguard that never sleeps! 💪"
    },
  ];

  const learningOutcomes = [
    "Mastered advanced React concepts and hooks. 🚀",
    "Enhanced skills in responsive design and cross-browser compatibility. 📱💻",
    "Gained experience in using Firebase for backend services. 🔥",
    "Improved project management and team collaboration. 🤝",
    "Learned to implement user authentication and authorization. 🔒",
    "Developed a deeper understanding of UI/UX principles and best practices. 🎨",
    "Enhanced problem-solving skills and debugging techniques. 🕵️‍♂️",
    "Gained practical experience in deploying and maintaining web applications. 🚀",
    "Improved ability to adapt to new technologies and frameworks. 💡",
    "Gained confidence in presenting and showcasing projects effectively. 🎤"
  ];

  const emojis = [
    "🧠", // Brain for mastering concepts
    "📱", // Phone for responsive design
    "🔥", // Fire for Firebase experience
    "🤝", // Handshake for collaboration
    "🔒", // Lock for authentication
    "🎨", // Art for UI/UX principles
    "🕵️‍♂️", // Detective for problem-solving
    "🚀", // Rocket for deploying applications
    "💡", // Lightbulb for adapting to new technologies
    "🎤" // Microphone for confidence in presenting
  ];

  const ProjectPreview = ({ name, link, video, details }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card
          className="relative bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105"
          style={{ width: '100%', maxWidth: '100%', height: '500px' }}
        >
          <CardMedia
            component="video"
            alt={name}
            height="100%"
            image={video}
            title={name}
            className="transition-transform duration-500"
            controls
          />
          <CardContent className="p-4 text-center flex flex-col justify-between h-full">
            <div>
              <Typography variant="h6" component="h3" className="text-xl font-bold text-black">
                {name} 🎉
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                {details}
              </Typography>
            </div>
            <Button
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              className="mt-4 py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Take a Peek! 👀
            </Button>
          </CardContent>
        </Card>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 animate-gradient-x">
      {/* Hero Section */}
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fade-in">
          🚀 Welcome to the 60-Day Code Frenzy! 😅
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-6 text-gray-200 animate-fade-in">
          Dive into the highlights of my coding journey! 🎢💻
        </p>
        <Button
          component={Link}
          to="/projects"
          variant="contained"
          color="secondary"
          className="mt-8 py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-500 ease-in-out transform hover:scale-110"
        >
          Explore More Projects 😜
        </Button>
      </div>

      {/* Project Previews Section */}
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Previews 🎨</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectPreview key={project.name} {...project} />
          ))}
        </div>
      </div>

      {/* What I Learned Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 mt-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
            What I Learned in 60 Days 🧠✨
          </h2>
          <div className="flex flex-wrap justify-center">
            {learningOutcomes.map((item, index) => (
              <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-lg max-w-xs flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="text-4xl mb-4">{emojis[index]}</div>
                <Typography variant="h6" component="h3" className="text-xl font-semibold text-gray-800 mb-2">
                  Learning {index + 1}
                </Typography>
                <Typography variant="body2" className="text-gray-600 text-center">
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <Challenges /> {/* Include Challenges component */}
    </div>
  );
};

export default HomePage;
