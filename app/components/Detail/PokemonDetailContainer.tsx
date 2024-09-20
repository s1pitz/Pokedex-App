"use client";
import React from "react";
import styles from "./PokemonDetailContainer.module.css";
import { useState } from "react";
import DetailAbout from "./About/About";
import DetailBaseStats from "./Evolution/DetailEvolution";
import DetailEvolution from "./BaseStats/DetailBaseStats";
import DetailMoves from "./Moves/DetailMoves";

interface PokemonDetailContainerProps {
  pokemon: any;
  lightColor: string;
  darkColor: string;
}

const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({
  pokemon,
  lightColor,
  darkColor,
}: PokemonDetailContainerProps) => {
  const [nav, setNav] = React.useState("About");

  console.log(nav);
  return (
    <>
      {/* nav */}
      <div
        className={`${styles.navbarAnimation} flex flex-row w-full justify-evenly items-center`}
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
      <div className="mt-3">
        {nav === "About" && <DetailAbout></DetailAbout>}
        {nav === "Base Stats" && <DetailBaseStats></DetailBaseStats>}
        {nav === "Evolution" && <DetailEvolution></DetailEvolution>}
        {nav === "Moves" && <DetailMoves></DetailMoves>}
      </div>
    </>
  );
};

export default PokemonDetailContainer;
