// ไฟล์ Secretroom.jsx
import { useState, useEffect } from "react";

export default function Secretroom({
  question,
  answer,
  handleAnswer,
  pokemonCage,
  pokemon,
  pokemonName,
  pokemonOption,
}) {
  const [secretPokemon, setSecretPokemon] = useState(null);

  useEffect(() => {
    async function fetchSecretPokemon() {
      const targetName = pokemonOption[4]; 
      
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${targetName}`
      );
      const data = await response.json();
      setSecretPokemon(data);
    }
    
    fetchSecretPokemon();
  }, [pokemonOption]);

  return (
    <div className="bg-gray-500 shadow-md h-80 pl-1 pr-1">
      <h1>Secretroom</h1>
      <span className="block mb-2">
        {question ? `✅ ${question}` : " ⌛ waiting for message"}
      </span>
      
      <div>
        Reply from Secret room:{" "}
        
        {/* แสดงรูป Mew */}
        {secretPokemon ? (
          <img
            className="block mx-auto"
            alt={secretPokemon.name}
            src={secretPokemon.sprites.front_default}
          />
        ) : (
          <p className="text-center text-sm mt-2">Loading Secret Pokemon...</p>
        )}
        
        <div>
          {/* ป้องกัน Error ตอนแสดงผลชื่อโปเกมอน */}
          {pokemonOption && pokemonOption.length > 4 ? (
             <p className="capitalize text-center font-bold">
               {pokemonOption[4]} 
             </p>
          ) : null}
        </div>
        
        <span className="block my-2">
          {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
        </span>
        
        <textarea
          value={answer}
          onChange={handleAnswer}
          className="bg-white text-black rounded px-2 py-1 w-full"
          placeholder="type your message here..."
        />
      </div>
    </div>
  );
}