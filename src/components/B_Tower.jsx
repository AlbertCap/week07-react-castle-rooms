import Chamber from "./C_Chamber";

export default function Tower({question, answer, handleAnswer}) {
    return (
        <div className="bg-teal-100 shadow-md pl-1 pr-1">
            <h1>Tower</h1>
            <span>
                    { question ? `✅ ${question}` : " ⌛ waiting for message"}
            </span>
            <p>
                Message to Secret room: {" "}
                <span>
                    {answer ? `✅ ${answer}` : "⌛ waiting for message..."}
                </span>
            </p>
            <div><Chamber question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}