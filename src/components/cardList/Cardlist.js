

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from './cardList.module.css'
import Favorites from "../favorites/Favorites";
import Search from "../search/Search";
const Cardlist = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)
    const [showFavotites, setShowfavotires] = useState(false)
    const [errorMessage, setError] = useState('')
const [sortedPokemon,setSorted] = useState()

    useEffect(() => {
        try {
            axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
                setPokemon(res.data.results)
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }

    }, [])



    const sortAlphabetically = () => {
       setSorted(pokemon.sort((a, b) => a.name.localeCompare(b.name)))
      
        console.log(sortedPokemon)

    }
    const showFavorites = () => {
        setShowfavotires(true)
    }

    const showPokemons = () => {
        setShowfavotires(false)
    }


    const getinputvalue = (poke) => {
        const filteredPokemon = pokemon.filter(item => item.name === poke);
        if (filteredPokemon.length === 0) {
            setError('No Pokemon Found!🥺')
        }
        setPokemon(filteredPokemon)
    }

    if (loading) {
        return (
            <h4>Loading</h4>
        )
    }

    return (
        <div className={styles.outer__container}>
            {errorMessage}
            {
                !showFavotites &&
                <>
                    <Search getinputvalue={getinputvalue} />
                    <Card pokemon={pokemon}
                        sortAlphabetically={sortAlphabetically}
                        showFavorites={showFavorites} />

                </>
            }

            {
                showFavotites &&
                <Favorites showPokemons={showPokemons} />}

        </div>
    )

}

export default Cardlist;