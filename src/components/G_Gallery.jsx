import Nook from "./H_Nook";

export default function Gallery({question, answer, handleAnswer}) {
    return(
        <div className="bg-emerald-500 shadow-md pl-1 pr-1">
            <h1>Gallery</h1>
            <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Nook question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
);
}