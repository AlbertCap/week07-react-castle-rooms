import Tower from "./B_Tower";

export default function A_Castle({
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-red-100 shadow-md text-center">
      <h1>Castle</h1>

      <Tower
        pokemonCage={pokemonCage}
        pokemon={pokemon}
        pokemonName={pokemonName}
        pokemonOption={pokemonOption}
      />
    </div>
  );
}
