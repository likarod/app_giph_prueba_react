import React, { useEffect, useState } from "react";
import "./styles.css";

const GIFS = [
  "https://media3.giphy.com/media/OmK8lulOMQ9XO/200w.webp?cid=ecf05e479wevstwg1iyydh5aqmbu6bzc97xh0qqfmhblg881&rid=200w.webp",
  "https://media3.giphy.com/media/11c7UUfN4eoHF6/giphy.webp?cid=ecf05e479wevstwg1iyydh5aqmbu6bzc97xh0qqfmhblg881&rid=giphy.webp"
];

const DIFFERENT_GIFS = [
  "https://media0.giphy.com/media/26xBLq0QJdxy57CV2/200w.webp?cid=ecf05e479wevstwg1iyydh5aqmbu6bzc97xh0qqfmhblg881&rid=200w.webp"
];

export default function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(function () {
    setGifs(DIFFERENT_GIFS);
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          //Se renderiza el estado inicial del componente
          gifs.map((uniqueGif) => (
            <img src={uniqueGif} alt="Gatos" />
          ))
        }
      </section>
      {/* 
      <button
        onClick={() => {
          setGifs(DIFFERENT_GIFS);
        }}
      >
        Change Gif
      </button> */}
    </div>
  );
}
