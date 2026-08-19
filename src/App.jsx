import { useState ,useContext, useEffect } from "react";
import A_Castle from "./components/A_Castle";

import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {

  const {question, answer, handleAnswer, handleQuestion} = useContext(MessageContext);

  const pokemonOption = ["pikachu", "bulbasaur", "charmander", "squirtle", "mew"];
  const pokemonCage = ["mew"]

  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);

  const [reinforcementCalled, setReinforcementCalled] = useState(false);
  const [reinforcementPokemons, setReinforcementPokemons] = useState([]);

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

  useEffect(() => {
    if (!reinforcementCalled) return;

    async function fetchReinforcements() {
      const targets = pokemonOption.slice(0, 4);
      const results = await Promise.all(
        targets.map((name) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json(),
          ),
        ),
      );
      setReinforcementPokemons(results);
    }
    fetchReinforcements();
  }, [reinforcementCalled]);

  function handleCallForReinforcement() {
    setReinforcementCalled(true);
  }



  return (
    <>
      <div className=" bg-slate-900 text-amber-900 text-center">
        <div className="flex flex-col pb-5">
        <h1>Outside the Castle</h1>
        <p className="">
          Pokemon outside:
          {reinforcementCalled ? (
            <div className="flex flex-row justify-center gap-4">
              {reinforcementPokemons.map((p) => (
                <div key={p.name} className="flex flex-col items-center">
                  <img
                    className="block"
                    alt={p.name}
                    src={p.sprites.front_default}
                  />
                  <p className="capitalize">{p.name}</p>
                </div>
              ))}
            </div>
          ) : (
            pokemon && (
              <img
                className="block mx-auto"
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
              />
            )
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
        {(answer.includes("Help!") || answer.includes("SOS")) && ( //included จะทำงานถ้ามีคำตรงกัน และ && คือเงื่อนไขที่จะทำหลังจากนั้น
          <>
            <p>help signal from inside</p>

            {reinforcementCalled ? (
              <button className="bg-white w-fit mx-auto mb-2 rounded-2xl">
                Build Escape pod
              </button>
            ) : (
              <button
                onClick={handleCallForReinforcement}
                className="bg-white w-fit mx-auto mb-2 rounded-2xl"
              >
                Call for reinforcement!
              </button>
            )}
          </>
        )}

        <textarea
          value={question}
          onChange={handleQuestion}
          className="bg-white text-black rounded px-2 py-1 w-xs mx-auto"
          placeholder="type your message here..."
        />
        </div>
        <A_Castle
          pokemonCage={pokemonCage}
          pokemon={pokemon}
          pokemonName={pokemonName}
          pokemonOption={pokemonOption}
        />
      </div>
    </>
  );
}
