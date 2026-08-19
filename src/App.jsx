import { useContext } from "react";
import A_Castle from "./components/A_Castle";

import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {

  const {question, answer, handleAnswer, handleQuestion} = useContext(MessageContext);

  return (
    <>
      <div className="bg-slate-900 text-amber-900 text-center">
        <p>
          Message for secret Room:
          <span>
            {question ? `✅ ${question}` : " ⌛ waiting for message"}
          </span>
        </p>
        <p>
          Message to Secret room:{" "}
          <span>{answer ? `✅ ${answer}` : "⌛ waiting for message..."}</span>
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
        />
      </div>
    </>

  );
}
