import { useState } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const [searchpokemon, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(searchpokemon);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let poke = searchpokemon;
    props.getinputvalue(poke);
    setSearch("");
  };

  return (
    <>
      <section className={styles.form}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            placeholder="Search your pokemon!"
            className={styles.input}
            value={searchpokemon}
            onChange={handleChange}
            type="text"
          />
          <button
            className={styles.search}
            onClick={handleSubmit}
            type="button"
          >
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default Search;
