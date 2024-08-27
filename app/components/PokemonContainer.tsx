"use client";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonData {
  name: string;
  imageUrl: string;
  types: string[];
  url: string;
}

const getPokemonData = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  const dataTypes = data.types;
  let types: string[] = [];
  if (dataTypes.length > 1) {
    types.push(dataTypes[0].type.name);
    types.push(dataTypes[1].type.name);
  } else {
    types.push(dataTypes[0].type.name);
  }
  const imageUrl = data.sprites.other.home.front_default;
  return { name: data.name, types, imageUrl, url };
};

const PokemonContainer = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + offset,
        { cache: "no-store" }
      );
      const data = await res.json();
      setPokemons(data.results);
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemons.map((pokemon) => getPokemonData(pokemon.url))
      );
      setLoading(false);
      setPokemonData(details);
    };
    if (pokemons.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemons]);

  if (loading) {
    return (
      <div className="relative min-h-80 flex items-center justify-center">
        <span className="loading loading-spinner text-[#4ead5b] w-16"></span>
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-[50vh] flex flex-col z-20">
        <span
          className={`${poppins.className} text-xl font-medium mb-6 lg:pl-5`}
        >
          What Pokémon are you looking for?
        </span>
        <form action="" method="POST">
          <div className="py-3 px-5 flex flex-row bg-[#F4F4F4] rounded-full w-max lg:ml-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4"
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
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Search Pokemon"
              className="bg-transparent pl-2 focus:outline-none w-80 autofill:bg-red-600"
            />
          </div>
        </form>
        <div
          className={`mt-10 relative flex flex-row flex-wrap justify-center min-[680px]:justify-evenly z-20 lg:ml-5`}
        >
          {pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              types={pokemon.types}
              url={pokemon.url}
            ></PokemonCard>
          ))}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between lg:mx-7">
        <div>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-10 h-10 fill-inherit"
            onClick={() => {
              setOffset(offset - 20);
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
              <polyline
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                points="7 2 17 12 7 22"
                transform="matrix(-1 0 0 1 24 0)"
              ></polyline>{" "}
            </g>
          </svg>
        </div>
        <div>
          <span>Page {offset / 20 + 1}</span>
        </div>
        <div>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-10 h-10 fill-inherit"
            onClick={() => {
              if (offset > 1000) {
                setOffset(offset);
              } else {
                setOffset(offset + 20);
              }
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
              <polyline
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                points="7 2 17 12 7 22"
              ></polyline>{" "}
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default PokemonContainer;
