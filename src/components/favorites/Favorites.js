import styles from "./favorites.module.css";
import { useState, useEffect } from "react";
import trash from '../../assets/images/trash.png'
import { Link } from "react-router-dom";
const Favorites = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("pokemon"));
    setItems(items);
  }, []);
  const deletePokemons = (index) => {
    const newitems = items.filter((_, pokemonindex) => {
      return pokemonindex !== index;

    }
    )
    setItems(newitems)
  }
  return (
    <section className={styles.favorites}>
      <Link className={styles.seePokemons__button} to="/">
        See Pokemons
      </Link>
      <h4>Favorites</h4>

      <div className={styles.favorte__item}>
        {!items
          ? "No Pokemons Saved at this thime!"
          : items.map((item, index) => (

            <div key={item.name} className={styles.singlePokemon}>
              <p>{item.name}</p>
              <img onClick={() => { deletePokemons(index) }} className={styles.icon} src={trash} alt="trash icon" />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Favorites;
