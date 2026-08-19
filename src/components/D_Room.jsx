import Hall from "./E_Hall";

export default function Room({
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-pink-100 shadow-md pl-1 pr-1">
      <h1>Room</h1>

      <div>
        <Hall
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
