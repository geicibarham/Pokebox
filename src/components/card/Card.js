
import styles from './card.module.css'
import React, { useState, useEffect } from 'react';
import pokemonIcon from '../../assets/images/poke_pika.png'
const Card = ({ pokemon}) => {
const [sortedList,setSortedList] = useState({pokemon})


    const sortAz = () => {
        setSortedList (pokemon.sort())
        
    }


    // let savetoLocal = () => {


    //     let savedPokemons = []



    //     if (localStorage.getItem('pokemon')) {
    //         savedPokemons = JSON.parse(
    //             localStorage.getItem('pokemon')
    //         )
    //     }

    //     if (pok) {
    //         savedPokemons.push(pok)
    //     }

    //     localStorage.setItem("pokemon", JSON.stringify
    //         (savedPokemons))
    //     console.log(savedPokemons.length)
    //     console.log(pok)
    // }
    return (
        <>
            <button
            className={styles.sort__button}
             onClick={sortAz}>
                <span>
                <img 
                className={styles.inline__icon}
                src={pokemonIcon} alt="pikachu icon"/>
                Pokemons in Alphabetical Order
                </span></button>
            <div className={styles.card}>

                {pokemon.map(pokemonName => (
                    <div className={styles.card__image} key={pokemonName}>
                        <img className={styles.pokemonImage}
                            src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
                            alt="cute pokemon images" />
                        <p className={styles.pokeName}> {pokemonName}</p>
                        <button>Save</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card;

