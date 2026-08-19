import Gallery from "./G_Gallery";

export default function Corridor({
  pokemonCage,
  pokemon,
  pokemonName, 
  pokemonOption,
}) {
  return (
    <div className="bg-stone-100 shadow-md pl-1 pr-1">
      <h1>Corridor</h1>

      <div>
        <Gallery
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
