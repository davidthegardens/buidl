import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/sounds/onopen.mp3');
    audio.play();
  }, []);

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url(/images/furry.jpg) no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ fontSize: '4rem', color: 'white', textAlign: 'center' }}>
        I LOVE FURRY PORN
      </h1>
    </main>
  );
}