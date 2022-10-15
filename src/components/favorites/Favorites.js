import styles from "./favorites.module.css";
import { useState, useEffect } from "react";
import trash from "../../assets/images/trash.png";
import { Link } from "react-router-dom";
import TrashCan from "../../assets/images/trash-big.png";
const Favorites = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("pokemon"));
    setItems(items);
  }, []);
  const deletePokemons = (index) => {
    const newitems = items.filter((_, pokemonindex) => {
      return pokemonindex !== index;
    });
    setItems(newitems);
  };

  const clearPokemons = () => {
    localStorage.removeItem("pokemon");
    setItems(false);
  };
  return (
    <section className={styles.outer__container}>
      <div className={styles.favorites}>
        <Link className={styles.seePokemons__button} to="/">
          See Pokemons
        </Link>
        <h4>Favorites</h4>

        <div className={styles.favorte__item}>
          {!items
            ? "No Pokemons Saved at this time!"
            : items.map((item, index) => (
              <div key={item.name} className={styles.singlePokemon}>
                <img
                  className={styles.icon}
                  src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                  alt="cute pokemon images"
                />


                <p>{item.name}</p>
                <img
                  onClick={() => {
                    deletePokemons(index);
                  }}
                  className={styles.icon}
                  src={trash}
                  alt="trash icon"
                />
              </div>
            ))}
          {items && (
            <img
              onClick={clearPokemons}
              className={styles.trashMedium}
              src={TrashCan}
              alt="big trash can icon"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
