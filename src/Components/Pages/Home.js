import React from 'react';
import Typewriter from 'typewriter-effect';
export const Home = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Welcome to Indegenious')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Made by Shivam Sinha')
            .start();
        }}
      />
    </div>
  );
};
