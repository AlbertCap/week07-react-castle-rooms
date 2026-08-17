import Room from "./D_Room";

export default function Chamber({question, answer, handleAnswer}){
    return (
        <div className="bg-yellow-100 shadow-md pl-1 pr-1">
            <h1>Chamber</h1>
                <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Room question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}