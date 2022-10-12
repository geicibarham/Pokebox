

const Card = ({ pokemon })=>{
return (
    <div>
    {pokemon.map(p => (
      <div key={p}>
        {p}
        <img src={`https://img.pokemondb.net/artwork/large/${p}.jpg`}
        alt="cute pokemon images"/>
        </div>
    ))}
  </div>
)
}

export default Card;

