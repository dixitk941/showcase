import React, { useState } from 'react';

const ProjectPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    { name: 'GENZ Notes', link: 'https://genznotes.vercel.app/', desc: 'An app so smart, it might just take notes for you while you take a nap. 📚💤' },
    { name: 'GENZ Connect', link: 'https://genzconnectt.vercel.app/', desc: 'Social networking with a Gen Z twist—because emojis and memes are a language of their own. 😎📱' },
    { name: 'Independence Timeline', link: 'https://india-independence-timeline.vercel.app/', desc: 'A timeline that’s as epic as India’s journey—minus the historical homework. 🇮🇳📅' },
    { name: 'Krishna Janmashtami', link: 'https://krishna-janmashtami.vercel.app/', desc: 'Celebrate Krishna Janmashtami like never before—virtually, but with extra laddoos! 🪔🎉' },
    { name: 'MentorConnect', link: 'https://mentorconnectt.vercel.app/', desc: 'Mentorship made easy—because everyone needs a wise Yoda in their corner. 🧙‍♂️✨' },
    { name: 'EveSecure', link: 'https://evesecure.vercel.app/login', desc: 'The safety app that’s like having a digital knight in shining armor—minus the armor. 🛡️🚀' },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500); // Simulate a short loading delay
  };

  const handleClosePreview = () => {
    setActiveIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <h1 className="text-4xl font-bold text-center mb-12">Prepare to Be Wowed! 🤯🚀</h1>
      <p className="text-center text-gray-600 mb-8">Click a project, and watch it magically appear inside an iPhone. Because, who doesn't love tiny phones? 📱✨</p>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="cursor-pointer relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.name} 🚀</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <p className="text-sm italic text-blue-500">Psst! Click me for a surprise. 😉</p>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          {isLoading ? (
            <div className="text-white text-lg">
              <p>Loading iPhone...</p>
              <p className="mt-2 text-gray-300 italic">Just hold on, Apple is updating their terms of service. 📱⌛</p>
            </div>
          ) : (
            <div className="relative w-[375px] h-[812px] bg-black rounded-[40px] overflow-hidden shadow-xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-b-xl w-36 h-6 z-10"></div>

              {/* iPhone Frame (with iframe preview) */}
              <iframe
                src={projects[activeIndex].link}
                title={projects[activeIndex].name}
                className="w-full h-full rounded-[30px]"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Close button with humor */}
              <button
                onClick={handleClosePreview}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 z-20"
              >
                Close me before I eat your battery! ⚡
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
