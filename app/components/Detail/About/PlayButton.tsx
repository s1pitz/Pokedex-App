import React from "react";

interface PlayButtonProps {
  cries: string;
}

const PlayButton = ({ cries }: PlayButtonProps) => {
  return (
    <>
      <div className="relative">
        <audio className="" id="audio" src={cries}></audio>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 cursor-pointer stroke-white"
          onClick={() => {
            let audio = document.getElementById("audio") as HTMLAudioElement;
            audio.play();
          }}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="stroke-inherit"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </>
  );
};

export default PlayButton;
