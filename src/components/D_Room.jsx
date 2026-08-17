import Hall from "./E_Hall";

export default function Room({question, answer, handleAnswer}) {
    return(
        <div className="bg-pink-100 shadow-md pl-1 pr-1">
            <h1>Room</h1>
                <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Hall question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}