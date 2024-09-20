import Image from "next/image";
import { Poppins } from "next/font/google";
import PokemonContainer from "./components/PokemonContainer";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

let offset = 0;
interface Pokemon {
  name: string;
  url: string;
}

export default async function Home() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0",
    { cache: "no-store" }
  );
  const data = await res.json();
  const pokemons: Pokemon[] = data.results;

  return (
    <>
      <nav className="bg-white max-w-full sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center flex-row justify-between">
          <Link href="" as={"image"}>
            <Image
              src={"/images/logo.png"}
              alt="Pokemon Logo"
              width={100}
              height={62}
              priority={false}
              className="w-[100px] h-auto"
            />
          </Link>
          <Link href="" className="">
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
              <span className={`${poppins.className} text-inherit`}>
                Pokédex
              </span>
            </div>
            <div className="w-full bg-red-600 h-1.5 rounded-b-md"></div>
          </Link>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      <section className="bg-[#313131] w-full p-5 relative">
        <div
          className={`${poppins.className} text-gray-100 max-w-screen-xl flex flex-col items-center mx-auto px-1 py-6`}
        >
          <span className={`text-inherit text-2xl mb-5`}>
            Hi, have fun using this website
          </span>
          <span className="p-3 w-fit text-inherit text-lg mb-4 bg-[#4ead5b] rounded-xl text-center">
            The goal of this website is to create a Pokédex that can search
            specific Pokémon
          </span>
          <span className={`text-sm`}>
            PS: I started this page for learning APIs and{" "}
            <a href="https://nextjs.org/" className="text-green-600">
              Next.js
            </a>
          </span>
        </div>
      </section>

      <main className={`relative w-full overflow-hidden`} id="mainScreen">
        <div
          className={`bg-[#313131] w-full px-5 pb-5 relative overflow-hidden`}
        >
          <div className="max-w-screen-xl mx-auto rounded-md bg-white pt-10 px-5 pb-10">
            {/* background :) */}
            <div className={`relative max-w-screen-xl mx-auto z-10`}>
              <svg
                width="340"
                height="260"
                viewBox="0 0 68 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-12 rounded-tr-3xl -right-5 z-0 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68 0H35.007C35.2717 9.43376 43.0023 17 52.5 17C59.2295 17 65.0719 13.2015 68 7.63169V0ZM68 23.346C63.5414 26.25 58.2177 27.9375 52.5 27.9375C36.9614 27.9375 24.3336 15.4749 24.0668 0H0.00231934C0.270691 28.7647 23.6719 52 52.5 52C57.8955 52 63.1008 51.1861 68 49.6744V23.346Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <PokemonContainer allPokemonData={pokemons}></PokemonContainer>
          </div>
        </div>
      </main>
    </>
  );
}
