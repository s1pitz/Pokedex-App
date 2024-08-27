"use client";
import React from "react";
import Image from "next/image";
import { get } from "http";

interface PokemonProps {
  name: string;
  imageUrl: string;
  types: string[];
  url: string;
}

const PokemonCard = ({ name, imageUrl, types, url }: PokemonProps) => {
  const colours = {
    normal: "#A8A77A",
    fire: "#ef4444",
    water: "#0ea5e9",
    electric: "#F7D02C",
    grass: "#10b981",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#84cc16",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const backgroundColors = {
    normal: "#cccabb",
    fire: "#fca5a5",
    water: "#93c5fd",
    electric: "#fef08a",
    grass: "#86efac",
    ice: "#96D9D6",
    fighting: "#f43f5e",
    poison: "#c084fc",
    ground: "#fed7aa",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#bef264",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#f9a8d4",
    // ice, psychic rock ghost dragon dark steel yang belum
  };

  const getColour = (type: string) => {
    for (const [key, color] of Object.entries(colours)) {
      if (key === type) {
        return color;
      }
    }
  };

  const getLightColour = (type: string) => {
    for (const [key, color] of Object.entries(backgroundColors)) {
      if (key === type) {
        return color;
      }
    }
  };

  return (
    <>
      <div
        className={`flex flex-col w-72 h-40 rounded-lg pt-5 mb-10 hover:scale-105 transition-transform duration-300 ease-in-out`}
        style={{ backgroundColor: `${getColour(types[0])}` }}
        onClick={() => {
          console.log(name);
        }}
      >
        <div className="flex flex-col pl-5">
          <span className={`text-white text-lg font-medium mb-3`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>

          <span
            className={`px-2 py-1 h-7 text-white w-fit text-sm rounded-2xl mb-2`}
            style={{ backgroundColor: `${getLightColour(types[0])}` }}
          >
            {types[0].charAt(0).toUpperCase() + types[0].slice(1)}
          </span>

          {types.length > 1 && (
            <span
              className={`px-2 py-1 text-white w-fit text-sm rounded-2xl mb-3`}
              style={{ backgroundColor: `${getLightColour(types[0])}` }}
            >
              {types[1].charAt(0).toUpperCase() + types[1].slice(1)}
            </span>
          )}

          {types.length === 1 && <span className={`px-2 py-1 h-7 mb-3`}></span>}
        </div>
        <div className="relative">
          <svg
            width="103"
            height="100"
            viewBox="0 0 103 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 -bottom-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.6094 56H103V66.4923C98.9068 81.3317 88.4625 93.5369 74.7749 100H29.9955C13.1963 92.0676 1.28255 75.4857 0 56H24.1609C25.8859 70.0544 37.8646 80.9375 52.3852 80.9375C66.9058 80.9375 78.8845 70.0544 80.6094 56ZM103 38.5077V49H80.6094C78.8845 34.9456 66.9058 24.0625 52.3852 24.0625C37.8646 24.0625 25.8859 34.9456 24.1609 49H0C1.80104 21.6369 24.5663 0 52.3852 0C76.5347 0 96.8759 16.3055 103 38.5077ZM52.5 70C62.165 70 70 62.165 70 52.5C70 42.835 62.165 35 52.5 35C42.835 35 35 42.835 35 52.5C35 62.165 42.835 70 52.5 70Z"
              fill="#f87171"
              style={{ fill: `${getLightColour(types[0])}` }}
            />
          </svg>
        </div>
        <div className="relative">
          <Image
            src={imageUrl}
            alt={name}
            width={145}
            height={145}
            className="absolute right-3 -bottom-4"
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PokemonCard;
