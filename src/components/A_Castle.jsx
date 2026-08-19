import Tower from "./B_Tower";

export default function A_Castle({
  question,
  answer,
  handleAnswer,
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  return (
    <div className="bg-red-100 shadow-md text-center">
      <h1>Castle</h1>

      <Tower
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        pokemonCage={pokemonCage}
        pokemon={pokemon}
        pokemonName={pokemonName}
        pokemonOption={pokemonOption}
      />
    </div>
  );
}
