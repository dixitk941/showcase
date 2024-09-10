import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useState } from 'react';

const ProjectPreview = ({ name, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out 
      ${isHovered ? 'scale-125 lg:scale-150' : 'scale-100'} hover:z-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '100%', maxWidth: isHovered ? '400px' : '300px', height: isHovered ? '600px' : '400px' }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="160"
        image={image}
        title={name}
        className={`transform transition-transform duration-500 ${isHovered ? 'scale-0' : 'scale-100'}`}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} 
        bg-black bg-opacity-80 flex justify-center items-center`}
      >
        <iframe
          src={link}
          title={name}
          className="w-full h-full"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <CardContent className="p-6 text-center">
        <Typography variant="h5" component="h3" className="text-2xl font-bold text-black">
          {name} 🥳
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
