import "./App.css";
import React, { useEffect, useState } from "react";

const DRUM_PADS = [
  {
    id: "heater-1",
    clipId: "Heater-1",
    label: "Q",
  },
  {
    id: "heater-2",
    clipId: "Heater-2",
    label: "W",
  },
  {
    id: "heater-3",
    clipId: "Heater-3",
    label: "E",
  },
  {
    id: "heater-4",
    clipId: "Heater-4_1",
    label: "A",
  },
  {
    id: "clap",
    clipId: "Heater-6",
    label: "S",
  },
  {
    id: "open-hh",
    clipId: "Dsc_Oh",
    label: "D",
  },
  {
    id: "kick-n-hat",
    clipId: "Kick_n_Hat",
    label: "Z",
  },
  {
    id: "kick",
    clipId: "RP4_KICK_1",
    label: "X",
  },
  {
    id: "closed-hh",
    clipId: "Cev_H2",
    label: "C",
  },
];

function App() {
  const [audio, setAudio] = useState([]);

  const handleDrumPadClick = (clipId) => {
    const audioToPlay = new Audio(
      `https://s3.amazonaws.com/freecodecamp/drums/${clipId}.mp3`
    );
    audioToPlay.play();
  };

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        {DRUM_PADS.map((drumPad) => (
          <button
            className="drum-pad"
            id={drumPad.id}
            key={drumPad.id}
            onClick={() => handleDrumPadClick(drumPad.clipId)}
          >
            {drumPad.label}
            <audio
              src={`https://s3.amazonaws.com/freecodecamp/drums/${drumPad.clipId}.mp3`}
              className="clip"
              id={drumPad.label}
            ></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
