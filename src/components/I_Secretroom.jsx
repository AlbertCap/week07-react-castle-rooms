export default function Secretroom({ question, answer, handleAnswer }) {
  return (
    <div className="bg-gray-500 shadow-md h-80 pl-1 pr-1">
      <h1>Secretroom</h1>
      <span>{question ? `✅ ${question}` : " ⌛ waiting for message"}</span>
      <p>
        Message to Secret room:{" "}
        <span>{answer ? `✅ ${answer}` : "⌛ waiting for message..."}</span>
        <textarea
          value={answer}
          onChange={handleAnswer}
          className="bg-white text-black rounded px-2 py-1"
          placeholder="type your message here..."
        />
      </p>
    </div>
  );
}
