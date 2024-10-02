"use client";
import React from "react";
import { useState, useLayoutEffect } from "react";
import styles from "./About.module.css";

interface ability {
  name: string;
  is_hidden: boolean;
  description: string;
}

interface AboutAbilityProps {
  abilities: ability[];
  darkColor: string;
}

const AboutAbilities = ({ abilities, darkColor }: AboutAbilityProps) => {
  return (
    <>
      <div className="font-bold">Abilities</div>
      <div
        className={`carousel my-2 rounded-2xl ${styles.box} w-96 h-28`}
        id="main"
      >
        {abilities.length > 0 &&
          abilities.map((ability, index) => (
            <div
              key={index}
              id={"slide" + index}
              className="carousel-item relative w-full cursor-pointer"
            >
              <a
                href={
                  index === 0
                    ? "#slide" + (abilities.length - 1)
                    : "#slide" + (index - 1)
                }
                className="absolute z-20 left-5 top-1/2 -translate-y-1/2 transform btn btn-circle border-0 text-white"
                style={{ backgroundColor: `${darkColor}` }}
              >
                ❮
              </a>
              <a
                href={
                  index === abilities.length - 1
                    ? "#slide0"
                    : "#slide" + (index + 1)
                }
                className="absolute z-20 right-5 top-1/2 -translate-y-1/2 transform btn btn-circle border-0 text-white"
                style={{ backgroundColor: `${darkColor}` }}
              >
                ❯
              </a>

              <div
                className="w-full flex flex-col justify-center items-center"
                onClick={() => {
                  let main = document.getElementById("main");
                  let box = document.getElementById("box" + index);
                  if (main) {
                    main.style.display = "none";
                    if (box) {
                      box.style.display = "flex";
                    }
                  }
                }}
              >
                <div className="">
                  {ability.name
                    .split("-")
                    .map(
                      (part: string) =>
                        part.charAt(0).toUpperCase() + part.slice(1)
                    )
                    .join(" ")}
                </div>
                <div>{ability.is_hidden && "(Hidden)"}</div>
              </div>
            </div>
          ))}
      </div>
      {abilities.length > 1 &&
        abilities.map((ability, index) => (
          <div
            className={`p-5 hidden cursor-pointer relative justify-center items-center bg-gray-500 my-2 rounded-2xl ${styles.box} w-96 h-28 text-white text-center text-sm `}
            key={index}
            id={"box" + index}
            onClick={() => {
              let box = document.getElementById("box" + index);
              let main = document.getElementById("main");
              if (box) {
                box.style.display = "none";
                if (main) {
                  main.style.display = "flex";
                }
              }
            }}
          >
            <div>{abilities[index].description}</div>
          </div>
        ))}
    </>
  );
};

export default AboutAbilities;
