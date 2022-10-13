

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from './cardList.module.css'
import Favorites from "../favorites/Favorites";
const Cardlist = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            setPokemon(res.data.results.map(pokemonName => pokemonName.name))

        })
    }, [])


    return (
        <section className={styles.wrapping_container}>
        <div className={styles.outer__container}>
            <Card pokemon={pokemon} />
        
        </div>
        <Favorites />
        </section>
    )

}

export default Cardlist;