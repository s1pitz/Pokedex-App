import React from "react";
import styles from "./About.module.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { get } from "http";
interface ability {
  name: string;
  is_hidden: boolean;
}

interface variety {
  name: string;
  url: string;
}
interface PokemonDetailAboutProps {
  flavorText: string;
  height: number;
  weight: number;
  abilities: ability[];
  cries: string[];
  eggGroups: string[];
  shape: string;
  varieties: variety[];
  baseExperience: number;
  darkColor: string;
  genderRate: number;
}

const DetailAbout = ({
  flavorText,
  height,
  weight,
  abilities,
  cries,
  eggGroups,
  shape,
  varieties,
  baseExperience,
  darkColor,
  genderRate,
}: PokemonDetailAboutProps) => {
  function convertToFoot(n: number) {
    let temp = [];
    const step1 = n / 2.54;
    const step2 = step1 / 12;
    const feet = Math.floor(step2);
    // const inches = (Math.round((step2 - feet) * 12) * 100) / 100;
    const inches = Math.round((step2 - feet) * 12 * 100) / 100;
    temp.push(feet, inches);
    return temp;
  }

  function getGenderRate(rate: number) {
    let genderRate: number[] = [];
    rate === -1 && genderRate.push(0, 0);
    rate === 0 && genderRate.push(0, 100);
    rate === 1 && genderRate.push(12.5, 87.5);
    rate === 2 && genderRate.push(25, 75);
    rate === 4 && genderRate.push(50, 50);
    rate === 6 && genderRate.push(75, 25);
    rate === 7 && genderRate.push(87.5, 12.5);
    rate === 8 && genderRate.push(100, 0);
    return genderRate;
  }

  console.log(getGenderRate(1));
  return (
    <>
      {/* description */}
      <div className="">
        <div className="font-bold mb-1">Description</div>
        <div className="text-base">{flavorText}</div>
      </div>

      {/* Numerical information & Cries*/}
      <div className={`grid ${styles.grid2Columns} my-4`}>
        <div className="">
          <div className="font-bold">Numerical Information</div>
          <div
            className={`my-2 py-3 px-6 rounded-2xl flex flex-row justify-between items-center ${styles.box}`}
          >
            <div className="flex flex-col">
              <span className="text-gray-500 font-normal">Weight</span>
              <span>
                {Math.round((weight / 10) * 2.205 * 100) / 100 +
                  " lbs  (" +
                  weight / 10 +
                  " kg)"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-normal">Height</span>
              <span>
                {convertToFoot(height * 10)[0] +
                  "' " +
                  convertToFoot(height * 10)[1] +
                  "'' (" +
                  height * 10 +
                  " cm)"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-normal">Base Experience</span>
              <span>{baseExperience + " exp"}</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-bold">Cries</div>
          <div
            className={`my-2 py-3 px-6 rounded-2xl flex flex-row justify-evenly items-center max-[915px]:justify-start max-[915px]:gap-16 ${styles.box}`}
          >
            <div className="flex flex-col ">
              <div
                className="border rounded-xl flex flex-row"
                style={{ backgroundColor: `${darkColor}` }}
              >
                <div className="flex flex-row gap-2 py-2 px-3">
                  <PlayButton cries={cries[0]} />
                  <PauseButton cries={cries[0]} />
                  <span className="text-white font-normal text-lg">Latest</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {cries[1] === "No legacy cry" && (
                <span className="text-gray-500 font-normal">
                  There is No Legacy Cry
                </span>
              )}
              {cries[1] !== "No legacy cry" && (
                <div
                  className="border rounded-xl flex flex-row"
                  style={{ backgroundColor: `${darkColor}` }}
                >
                  <div className="flex flex-row gap-2 py-2 px-3">
                    <PlayButton cries={cries[1]} />
                    <PauseButton cries={cries[1]} />
                    <span className="text-white font-normal text-lg">
                      Legacy
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 mt-1 flex flex-row flex-wrap gap-10">
        {/* Egg Groups (Breeding) */}
        <div className="">
          <div className="font-bold mb-2">Breeding</div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="text-gray-500 font-normal">Gender Rate</td>
                  <td className="w-10"></td>
                  <td>
                    {getGenderRate(genderRate)[0] ===
                      getGenderRate(genderRate)[1] &&
                      getGenderRate(genderRate)[0] === 0 && (
                        <div>Genderless</div>
                      )}
                    {getGenderRate(genderRate)[0] !==
                      getGenderRate(genderRate)[1] &&
                      getGenderRate(genderRate)[0] !== 0 && (
                        <div>
                          <span>{getGenderRate(genderRate)[0] + "% "}</span>
                          <span className="text-pink-500 font-bold">
                            ♀ &nbsp;&nbsp;&nbsp;
                          </span>
                          <span>{getGenderRate(genderRate)[1] + "% "}</span>
                          <span className="text-blue-500 font-bold">
                            ♂ &nbsp;&nbsp;&nbsp;
                          </span>
                        </div>
                      )}
                  </td>
                </tr>
                <tr className="h-1"></tr>
                <tr>
                  <td className="text-gray-500 font-normal">Egg Groups</td>
                  <td className="w-10"></td>
                  <td>
                    {eggGroups.length === 0 && "No Available Data"}
                    {eggGroups.length !== 0 &&
                      eggGroups[0]
                        .split("-")
                        .map(
                          (part: string) =>
                            part.charAt(0).toUpperCase() + part.slice(1)
                        )
                        .join(" ")}
                  </td>
                </tr>
                <tr className="h-1"></tr>
                <tr>
                  <td className="text-gray-500 font-normal">Egg Cycle</td>
                  <td className="w-10"></td>
                  <td>
                    {eggGroups.length < 2 && "No Available Data"}
                    {eggGroups.length > 1 &&
                      eggGroups[1]
                        .split("-")
                        .map(
                          (part: string) =>
                            part.charAt(0).toUpperCase() + part.slice(1)
                        )
                        .join(" ")}
                  </td>
                </tr>
                <tr className="h-1"></tr>
                <tr>
                  <td className="text-gray-500 font-normal">Shape</td>
                  <td className="w-10"></td>
                  <td>
                    {shape
                      .split("-")
                      .map(
                        (part: string) =>
                          part.charAt(0).toUpperCase() + part.slice(1)
                      )
                      .join(" ")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="">
          <div className="font-bold mb-2">Abilities</div>
          <a
            className={`my-2 py-3 px-6 rounded-2xl flex flex-row justify-between items-center ${styles.box} w-full`}
            href=""
          >
            {abilities[0].name}
          </a>
        </div>
      </div>
      {/* abilities */}

      <div>{varieties[0].name}</div>
    </>
  );
};

export default DetailAbout;
