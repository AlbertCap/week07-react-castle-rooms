import Secretroom from "./I_Secretroom";

export default function Nook({question, answer, handleAnswer}) {
    return(
        <div className="bg-violet-100 shadow-md pl-1 pr-1">
            <h1>Nook</h1>
            <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Secretroom question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
);
}