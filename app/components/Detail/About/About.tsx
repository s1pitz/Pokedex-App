import React from "react";
import styles from "./About.module.css";
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
  console.log(convertToFoot(90));
  return (
    <>
      <div className="">
        <div className="font-bold mb-1">Description</div>
        <div className="text-base">{flavorText}</div>
      </div>

      <div className="flex flex-row justify-between flex-wrap my-4">
        <div className="w-1/2">
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
        <div className="w-1/2">
          <div>Cries</div>
          <div
            className={`my-2 py-3 px-6 rounded-2xl flex flex-row justify-between items-center ${styles.box}`}
          >
            <div>1</div>
            <div>2</div>
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
