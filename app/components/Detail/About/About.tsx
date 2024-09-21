import React from "react";
import styles from "./About.module.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
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

  return (
    <>
      <div className="">
        <div className="font-bold mb-1">Description</div>
        <div className="text-base">{flavorText}</div>
      </div>

      <div className={`grid ${styles.grid2Columns} my-4`}>
        <div className="">
          <div className="font-bold">Basic Information</div>
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
            className={`my-2 py-3 px-6 rounded-2xl flex flex-row justify-evenly max-[915px]:justify-start max-[915px]:gap-16 ${styles.box}`}
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

      <div>{eggGroups}</div>
      <div>{shape}</div>
      <div>{abilities[0].name}</div>
      <div>{varieties[0].name}</div>
    </>
  );
};

export default DetailAbout;
