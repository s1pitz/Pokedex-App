import Link from "next/link";
import Image from "next/image";
import React from "react";

const PokemonDetail = async ({ params }: { params: { id: number } }) => {
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
    ice: "#a5f3fc",
    fighting: "#f43f5e",
    poison: "#c084fc",
    ground: "#fed7aa",
    flying: "#A98FF3",
    psychic: "#f9a8d4",
    bug: "#bef264",
    rock: "#d0c67d",
    ghost: "#a088bb",
    dragon: "#bca8f8",
    dark: "#b08c73",
    steel: "#dfdfe5",
    fairy: "#f9a8d4",
  };

  const getColour = (type: string) => {
    for (const [key, color] of Object.entries(colours)) {
      if (key === type) {
        // console.log(color);
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

  async function getData(id: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  }

  const pokemon = await getData(params.id);

  return (
    <>
      <nav className="bg-white max-w-full sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center flex-row justify-between">
          <Link href="/" as={"image"}>
            <Image
              src={"/images/logo.png"}
              alt="Pokemon Logo"
              width={100}
              height={62}
              priority={false}
              className="w-[100px] h-auto"
            />
          </Link>
          <Link href="../" className="">
            <div className="p-4 flex items-center flex-col hover:bg-red-600 hover:text-white hover:fill-white pokedexNav">
              <svg
                viewBox="0 0 24 24"
                fill="#4F4F4F"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mb-1 fill-inherit"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
                    fill="#4F4F4F"
                    className="fill-inherit"
                  ></path>
                  <path
                    d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
                    fill="#4F4F4F"
                    className="fill-inherit"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
                    fill="#4F4F4F"
                    fillRule="evenodd"
                    className="fill-inherit"
                  ></path>
                </g>
              </svg>
              <span className={` text-inherit`}>Pokédex</span>
            </div>
            <div className="w-full bg-red-600 h-1.5 rounded-b-md"></div>
          </Link>
          <div className="w-[100px]"></div>
        </div>
      </nav>
      <main className={`relative w-full overflow-hidden`} id="mainScreen">
        <div
          className={`bg-[#313131] w-full px-5 pb-5 relative overflow-hidden h-full`}
        >
          <div className="max-w-screen-xl mx-auto rounded-md px-4 my-5">
            <span className="text-lg text-white">Pokemon Detail</span>
          </div>
          <div
            className="relative min-h-32 max-w-screen-xl mx-auto rounded-md bg-white pb-10 mt-2"
            style={{
              backgroundColor: `${getColour(pokemon.types[0].type.name)}`,
            }}
          >
            <div className="absolute z-0">
              <svg
                width="114"
                height="103"
                viewBox="0 0 114 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: `${getLightColour(pokemon.types[0].type.name)}`,
                }}
                className="rounded-md opacity-30"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 99.1019C6.98828 102.872 15.4508 103.878 23.592 101.209L92.9613 78.4741C108.706 73.3139 117.286 56.3674 112.126 40.6229L98.8121 0H0V99.1019Z"
                  fill="#D9D9D9"
                  className="fill-inherit"
                />
              </svg>
            </div>
            <div className="relative pt-10 z-10 px-5">
              <h1>
                {pokemon.name.indexOf("-") == -1 &&
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                {pokemon.name.indexOf("-") != -1 &&
                  pokemon.name
                    .split("-")
                    .map(
                      (part: string) =>
                        part.charAt(0).toUpperCase() + part.slice(1)
                    )
                    .join(" ")}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PokemonDetail;