import styles from "./favorites.module.css";
import { useState, useEffect } from "react";
const Favorites = ({ showPokemons }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("pokemon"));
    setItems(items);
  }, []);

  console.log(items);

  return (
    <section className={styles.favorites}>
      <h4>Favorites</h4>
      <button className={styles.seePokemons__button} onClick={showPokemons}>
        See Pokemons
      </button>
      <ul>
        {!items
          ? "No Pokemons Saved at this thime!"
          : items.map((item) => <li key={item}>{item.name}</li>)}
      </ul>
    </section>
  );
};

export default Favorites;
