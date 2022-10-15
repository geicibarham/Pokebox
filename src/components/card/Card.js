import styles from "./card.module.css";
import React, { useState, useEffect } from "react";
import pokemonIcon from "../../assets/images/poke_pika.png";
import Favorites from "../favorites/Favorites";
import Search from "../search/Search";
const Card = (props) => {
  let savetoLocal = () => {
    let pok;
    for (let i = 0; i < props.pokemon.length; i++) {
      pok = props.pokemon[i];
    }
    let savedPokemons = [];
    if (localStorage.getItem("pokemon")) {
      savedPokemons = JSON.parse(localStorage.getItem("pokemon"));
    }

    if (pok) {
      savedPokemons.push(pok);
    }

    localStorage.setItem("pokemon", JSON.stringify(savedPokemons));
    console.log(savedPokemons.length);
    console.log(pok);
    // }
  };

  return (
    <>
      <div className={styles.button__container}>
        <button
          className={`${styles.sort__button} ${styles.button__general}`}
          onClick={props.sortAlphabetically}
        >
          <span>
            <img
              className={styles.inline__icon}
              src={pokemonIcon}
              alt="pikachu icon"
            />
            Pokemons in Alphabetical Order
          </span>
        </button>
        <button
          className={`${styles.favorites__button} ${styles.button__general}`}
          onClick={props.showFavorites}
        >
          Favorites ⭐{" "}
        </button>
      </div>
      <div className={`${styles.card} ${styles.rounded}`}>
        {props.pokemon.map((pokemonName) => (
          <div
            className={`${styles.card__image} ${styles.rounded}`}
            key={pokemonName.name}
          >
            <img
              className={styles.pokemonImage}
              src={`https://img.pokemondb.net/artwork/large/${pokemonName.name}.jpg`}
              alt="cute pokemon images"
            />
            <p className={styles.pokeName}> {pokemonName.name}</p>

            <button
              className={`${styles.save} ${styles.button__general}`}
              onClick={savetoLocal}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
