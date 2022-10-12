
import styles from './card.module.css'
const Card = ({ pokemon })=>{
return (
 
    
    <div className={styles.card}>
    {pokemon.map(pokemonName => (
      <div className={styles.card__image} key={pokemonName}>
       
        <img className={styles.pokemonImage}
        src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
        alt="cute pokemon images"/>
        <p> {pokemonName}</p>
        </div>
    ))}
    </div>
  
)
}

export default Card;

