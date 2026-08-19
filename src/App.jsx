import { useState, useEffect } from "react";
import A_Castle from "./components/A_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Coming to ya!");

  const pokemonOption = ["pikachu", "bulbasaur", "charmander", "squirtle", "mew"];
  const pokemonCage = ["mew"]

  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      );
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonName]);

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return (
    <>
      <div className=" bg-slate-900 text-amber-900 text-center">
        <h1>Outside the Castle</h1>
        <p className="">
          Pokemon outside:
          {pokemon && (
            <img
              className="block mx-auto"
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
          )}
          <p />
          <div>
            {pokemonOption
              .filter((name) => name === "pikachu") // กรองให้เหลือแค่ pikachu
              .map((name) => (
                <p >
                  {name}
                </p>
              ))}
          </div>
        </p>
        <p>
          Message to secret Room:
          <span>{question ? `✅ ${question}` : " ⌛ Waiting..."}</span>
        </p>
        <p>
          Reply from Secret room:{" "}
          <span>{answer ? `✅ ${answer}` : "⌛ Waiting for Reply..."}</span>
        </p>

        <textarea
          value={question}
          onChange={handleQuestion}
          className="bg-white text-black rounded px-2 py-1"
          placeholder="type your message here..."
        />
        <A_Castle
          question={question}
          answer={answer}
          handleAnswer={handleAnswer}
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </>
  );
}
