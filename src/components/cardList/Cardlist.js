

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from './cardList.module.css'
import Favorites from "../favorites/Favorites";
const Cardlist = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)
    const [showFavotites, setShowfavotires] = useState(false)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            setPokemon(res.data.results.map(pokemonName => pokemonName.name))
            setLoading(false)
        })
    }, [])


    const showFavorites = () =>{
        setShowfavotires(true)
    }

    const showPokemons = () =>{
        setShowfavotires(false)
    }

    if (loading) {
        return (
            <h4>Loading</h4>
        )
    }

    return (


  
            <div className={styles.outer__container}>
                {!showFavotites &&
                    <Card pokemon={pokemon} 
                    showFavorites ={showFavorites }/>
                }


        
            {
                showFavotites &&
                <Favorites showPokemons ={showPokemons} />}

</div>
    )

}

export default Cardlist;