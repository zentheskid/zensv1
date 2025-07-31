import React from 'react';

export default function App() {
  return (
    <>
      <img
        src="https://files.catbox.moe/bh3n1r.gif"
        alt="background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      <audio autoPlay loop>
        <source src="https://files.catbox.moe/7hmd50.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ position: 'relative', zIndex: 1, color: '#fff', padding: 20 }}>
        {/* Your site content goes here */}
        <h1>My Guns.lol Clone</h1>
        <p>Welcome to my site with a cool background and music!</p>
      </div>
    </>
  );
}
