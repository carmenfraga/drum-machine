import "./App.css";
import React, { useEffect, useState } from "react";

const DRUM_PADS = [
  {
    id: "heater-1",
    clipId: "Heater-1",
    label: "Q",
    displayValue: "Heater 1",
  },
  {
    id: "heater-2",
    clipId: "Heater-2",
    label: "W",
    displayValue: "Heater 2",
  },
  {
    id: "heater-3",
    clipId: "Heater-3",
    label: "E",
    displayValue: "Heater 3",
  },
  {
    id: "heater-4",
    clipId: "Heater-4_1",
    label: "A",
    displayValue: "Heater 4",
  },
  {
    id: "clap",
    clipId: "Heater-6",
    label: "S",
    displayValue: "Clap",
  },
  {
    id: "open-hh",
    clipId: "Dsc_Oh",
    label: "D",
    displayValue: "Open HH",
  },
  {
    id: "kick-n-hat",
    clipId: "Kick_n_Hat",
    label: "Z",
    displayValue: "Kick n' Hat",
  },
  {
    id: "kick",
    clipId: "RP4_KICK_1",
    label: "X",
    displayValue: "Kick",
  },
  {
    id: "closed-hh",
    clipId: "Cev_H2",
    label: "C",
    displayValue: "Closed HH",
  },
];

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const playClip = (drumPad) => {
    const audioToPlay = new Audio(
      `https://s3.amazonaws.com/freecodecamp/drums/${drumPad.clipId}.mp3`
    );
    audioToPlay.play();
    setDisplayValue(drumPad.displayValue);
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const drumPadFound = DRUM_PADS.find(
        (drumPad) => drumPad.label === event.key.toUpperCase()
      );

      if (drumPadFound) {
        playClip(drumPadFound);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="display">{displayValue}</div>
      <div id="drum-machine">
        {DRUM_PADS.map((drumPad) => (
          <button
            className="drum-pad"
            id={drumPad.id}
            key={drumPad.id} //In React, each child in a list should have a unique "key" prop
            onClick={() => playClip(drumPad)}
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
