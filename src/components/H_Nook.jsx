import Secretroom from "./I_Secretroom";

export default function Nook({
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-violet-100 shadow-md pl-1 pr-1">
      <h1>Nook</h1>

      <div>
        <Secretroom
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </div>
  );
}
