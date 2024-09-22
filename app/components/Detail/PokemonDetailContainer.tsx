"use client";
import React from "react";
import styles from "./PokemonDetailContainer.module.css";
import DetailAbout from "./About/About";
import DetailBaseStats from "./Evolution/DetailEvolution";
import DetailEvolution from "./BaseStats/DetailBaseStats";
import DetailMoves from "./Moves/DetailMoves";

interface PokemonDetailContainerProps {
  pokemon: any;
  species: any;
  lightColor: string;
  darkColor: string;
}

interface ability {
  name: string;
  is_hidden: boolean;
}

interface variety {
  is_default: boolean;
  name: string;
  url: string;
}

const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({
  pokemon,
  species,
  lightColor,
  darkColor,
}: PokemonDetailContainerProps) => {
  const [nav, setNav] = React.useState("About");

  function getCries(cries: any) {
    let criesArray: string[] = [];
    criesArray.push(cries.latest);
    if (cries.legacy === null) {
      criesArray.push("No legacy cry");
      return criesArray;
    }
    criesArray.push(cries.legacy);
    return criesArray;
  }

  function getflavorTexts(flavorTexts: any) {
    let flavorTextArray: string[] = [];

    for (let i = 0; i < flavorTexts.length; i++) {
      if (flavorTexts[i].language.name === "en") {
        for (let j = 0; j < flavorTextArray.length; j++) {
          if (flavorTextArray[j] === flavorTexts[i].flavor_text) {
            flavorTextArray.pop();
            break;
          }
        }
        flavorTextArray.push(flavorTexts[i].flavor_text);
      }
    }

    let maximum: string = flavorTextArray[0];
    for (let i = 0; i < flavorTextArray.length; i++) {
      if (flavorTextArray[i].length > maximum.length) {
        maximum = flavorTextArray[i];
      }
    }

    for (let i = 0; i < maximum.length; i++) {
      if (maximum[i] === "") {
        maximum = maximum.slice(0, i) + " " + maximum.slice(i + 1);
      }
    }
    // title case
    // return maximum.replace(
    //   /\w\S*/g,
    //   (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    // );
    return maximum;
  }

  function getEggs(eggGroups: any) {
    let eggGroupsArray: string[] = [];
    for (let i = 0; i < eggGroups.length; i++) {
      eggGroupsArray.push(eggGroups[i].name);
    }
    return eggGroupsArray;
  }

  function getAbilities(abilities: any) {
    let AbilityArray: ability[] = [];
    for (let i = 0; i < abilities.length; i++) {
      AbilityArray.push({
        name: abilities[i].ability.name,
        is_hidden: abilities[i].is_hidden,
      });
    }
    return AbilityArray;
  }

  function getVarieties(varieties: any) {
    let varietiesArray: variety[] = [];
    for (let i = 0; i < varieties.length; i++) {
      varietiesArray.push({
        is_default: varieties[i].is_default,
        name: varieties[i].pokemon.name,
        url: varieties[i].pokemon.url,
      });
    }
    return varietiesArray;
  }
  return (
    <>
      {/* nav */}
      <div
        className={`${styles.navbarAnimation} flex flex-row w-full justify-evenly items-center mb-4`}
      >
        {nav === "About" && (
          <div
            className={`${styles.littleNavbarActive}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
          >
            About
          </div>
        )}
        {nav !== "About" && (
          <div
            className={`${styles.littleNavbar}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
            onClick={() => setNav("About")}
          >
            About
          </div>
        )}
        {nav === "Base Stats" && (
          <div
            className={`${styles.littleNavbarActive}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
          >
            Base Stats
          </div>
        )}
        {nav !== "Base Stats" && (
          <div
            className={`${styles.littleNavbar}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
            onClick={() => setNav("Base Stats")}
          >
            Base Stats
          </div>
        )}
        {nav === "Evolution" && (
          <div
            className={`${styles.littleNavbarActive}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
          >
            Evolution
          </div>
        )}
        {nav !== "Evolution" && (
          <div
            className={`${styles.littleNavbar}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
            onClick={() => setNav("Evolution")}
          >
            Evolution
          </div>
        )}
        {nav === "Moves" && (
          <div
            className={`${styles.littleNavbarActive}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
          >
            Moves
          </div>
        )}
        {nav !== "Moves" && (
          <div
            className={`${styles.littleNavbar}`}
            style={
              {
                "--dark-color": darkColor,
              } as React.CSSProperties
            }
            onClick={() => setNav("Moves")}
          >
            Moves
          </div>
        )}
      </div>
      <div className="">
        {nav === "About" && (
          <DetailAbout
            genderRate={species.gender_rate}
            baseExperience={pokemon.base_experience}
            weight={pokemon.weight}
            height={pokemon.height}
            shape={species.shape.name}
            abilities={getAbilities(pokemon.abilities)}
            varieties={getVarieties(species.varieties)}
            cries={getCries(pokemon.cries)}
            eggGroups={getEggs(species.egg_groups)}
            flavorText={getflavorTexts(species.flavor_text_entries)}
            darkColor={darkColor}
          ></DetailAbout>
        )}
        {nav === "Base Stats" && <DetailBaseStats></DetailBaseStats>}
        {nav === "Evolution" && <DetailEvolution></DetailEvolution>}
        {nav === "Moves" && <DetailMoves></DetailMoves>}
      </div>
    </>
  );
};

export default PokemonDetailContainer;
