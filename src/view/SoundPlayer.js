import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiTwotoneSound, AiOutlineSound } from "react-icons/ai";
import { buttonA } from "./globalCss";

const useAudio = url => {
  // console.log({ hook_url: url });
  //I added a setter function to the audio here...
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  //I added this useEffect function
  //to create a new Audio object once the url is changing...
  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  useEffect(() => {
    // console.log({ audio: audio.src });

    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  // console.log({ url });
  const [playing, toggle] = useAudio(url);


  return (
    <div>
      <Button onClick={toggle}>
        {/* i added another icon here to have a toggle effect... */}
        {playing === false ? <AiTwotoneSound /> : <AiOutlineSound />}
      </Button>
    </div>
  );
};

export default Player;

const Button = styled.div`
  ${buttonA}
  font-size:30px;
`;
