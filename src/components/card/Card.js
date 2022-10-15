import styles from "./card.module.css";
import pokemonIcon from "../../assets/images/poke_pika.png";

import { Link } from "react-router-dom";
const Card = (props) => {
  let savetoLocal = (index) => {
    const pok = props.pokemon[index];
    let savedPokemons = [];
    if (localStorage.getItem("pokemon")) {
      savedPokemons = JSON.parse(localStorage.getItem("pokemon"));
    }

    if (pok && !savedPokemons.find((pokemons) => pokemons.name === pok.name)) {
      savedPokemons.push(pok);
    }

    localStorage.setItem("pokemon", JSON.stringify(savedPokemons));
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

        <Link
          to="/favorites"
          className={`${styles.favorites__button} ${styles.button__general}`}
        >
          Favorites ⭐{" "}
        </Link>
      </div>
      <div className={`${styles.card} ${styles.rounded}`}>
        {props.pokemon.map((pokemonName, index) => (
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
              onClick={() => {
                savetoLocal(index);
              }}
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
