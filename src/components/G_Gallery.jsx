import Nook from "./H_Nook";

export default function Gallery({
  pokemonCage,
  pokemon,
  pokemonName, 
  pokemonOption,
}) {
  return (
    <div className="bg-emerald-500 shadow-md pl-1 pr-1">
      <h1>Gallery</h1>

      <div>
        <Nook
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
