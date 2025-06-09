"use client";

import { useRef, useEffect } from "react"; // 👈 Add this line
import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playButton = document.getElementById("play-audio");

    const toggleAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (audio.paused) {
        audio.play();
        playButton.classList.add("is--active");
      } else {
        audio.pause();
        playButton.classList.remove("is--active");
      }
    };

    playButton.addEventListener("click", toggleAudio);

    return () => {
      playButton.removeEventListener("click", toggleAudio);
    };
  }, []);
  return (
    <header id="masthead" className="site-header">
      <audio ref={audioRef} id="site-audio" loop preload="auto">
        <source src="/rcdp-sound.mp3" type="audio/mpeg" />
      </audio>
      <Container>
        <Navigation />
      </Container>
      <div id="play-audio" className="music-play">
        <div className="sound-wave">
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
          <div className="sound-bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
