

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from './cardList.module.css'
const Cardlist = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
          setPokemon(res.data.results.map(pokemonName => pokemonName.name))
        })
    }, [])
    return (
        <section className={styles.outer__container}>
        <Card pokemon={pokemon} />
        </section>
    )

}

export default Cardlist;