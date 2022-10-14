import styles from './card.module.css'
import React, { useState, useEffect } from 'react';
import pokemonIcon from '../../assets/images/poke_pika.png'
import Favorites from '../favorites/Favorites';

const Card = ({ pokemon,showFavorites }) => {
    const [sortedList, setSortedList] = useState({ pokemon })


    const sortAz = () => {
        setSortedList(pokemon.sort())

    }
    console.log(pokemon)

    let savetoLocal = () => {
        let pok;
        for (let i = 0; i < pokemon.length; i++) {
            pok = pokemon[i]
        }
        let savedPokemons = []
        if (localStorage.getItem('pokemon')) {
            savedPokemons = JSON.parse(
                localStorage.getItem('pokemon')
            )
        }

        if (pok) {
            savedPokemons.push(pok)
        }

        localStorage.setItem("pokemon", JSON.stringify
            (savedPokemons))
        console.log(savedPokemons.length)
        console.log(pok)
        // }
    }
        return (
            <>
            <div className={styles.button__container}>
                <button
                    className={styles.sort__button}
                    onClick={sortAz}>
                    <span>
                        <img
                            className={styles.inline__icon}
                            src={pokemonIcon} alt="pikachu icon" />
                        Pokemons in Alphabetical Order
                    </span></button>
                    <button className={styles.favorites__button}
                    onClick={showFavorites}>Favorites 
                    ⭐ </button>
                    </div>
                <div className={styles.card}>

                    {pokemon.map(pokemonName => (
                        <div className={styles.card__image} key={pokemonName}>
                            <img className={styles.pokemonImage}
                                src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
                                alt="cute pokemon images" />
                            <p className={styles.pokeName}> {pokemonName}</p>
                            <button onClick={savetoLocal}>Save</button>
                        </div>
                    ))}

                </div>

            </>
        )
    }

    export default Card;