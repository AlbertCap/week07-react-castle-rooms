import Chamber from "./C_Chamber";

export default function Tower({question, answer, handleAnswer}) {
    return (
        <div className="bg-teal-100 shadow-md pl-1 pr-1">
            <h1>Tower</h1>
            
            <div><Chamber question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}