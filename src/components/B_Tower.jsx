import Chamber from "./C_Chamber";

export default function Tower({
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-teal-100 shadow-md pl-1 pr-1">
      <h1>Tower</h1>

      <div>
        <Chamber
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
