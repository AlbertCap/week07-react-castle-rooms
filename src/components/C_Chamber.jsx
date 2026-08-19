import Room from "./D_Room";

export default function Chamber({
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-yellow-100 shadow-md pl-1 pr-1">
      <h1>Chamber</h1>

      <div>
        <Room
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
