import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 NeoCodeNex. All rights reserved. Powered by caffeine and code!</p>
        <p>
          Follow me on{' '}
          <a href="https://www.linkedin.com/in/karan-dixit-7223a628a/" className="underline hover:text-yellow-400">LinkedIn</a> |{' '}
          <a href="https://github.com/dixitk941" className="underline hover:text-yellow-400">GitHub</a>
        </p>
        <p>
          <a href="https://neocodenex.tech" className="text-yellow-300 hover:underline">Visit NeoCodeNex for more cool stuff!</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
