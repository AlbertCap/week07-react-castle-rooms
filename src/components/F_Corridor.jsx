import Gallery from "./G_Gallery";

export default function Corridor({question, answer, handleAnswer}) {
    return(
        <div className="bg-stone-100 shadow-md pl-1 pr-1">
            <h1>Corridor</h1>
            <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Gallery question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
);
}