// src/Challenges.js
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import WarningIcon from '@mui/icons-material/Warning';
import './Challenges.css'; // Import the CSS file for animations

const challenges = [
  "Encountered unexpected bugs and errors, which were challenging but ultimately rewarding to debug. 🐛",
  "Faced difficulties with responsive design, which required several iterations to perfect. 📱",
  "Struggled with integrating Firebase services seamlessly into the app. 🔄",
  "Had to manage and coordinate with team members, which posed some initial challenges. 🤝",
  "Experienced issues with deployment and hosting that required additional learning and troubleshooting. 🚀",
];

const Challenges = () => {
  return (
    <div className="bg-red-200 py-16 mt-16 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-red-900 mb-8 text-center">
          Challenges Faced 🤯
        </h2>
        <div className="flex flex-wrap justify-center">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="bg-white p-6 m-4 rounded-lg shadow-lg max-w-xs flex flex-col items-center relative overflow-hidden animate-error-card"
            >
              <CardContent className="text-center">
                <div className="absolute top-0 right-0 p-4 text-red-600 text-5xl animate-error-icon-1">
                  <ErrorIcon />
                </div>
                <Typography variant="body2" className="text-gray-800 mb-4">
                  {challenge}
                </Typography>
                <div className="absolute bottom-0 left-0 p-4 text-red-600 text-7xl animate-error-icon-2">
                  <SentimentDissatisfiedIcon />
                </div>
                <div className="absolute bottom-0 right-0 p-4 text-yellow-500 text-6xl animate-error-icon-3">
                  <WarningIcon />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
