import Corridor from "./F_Corridor";

export default function Hall({question, answer, handleAnswer}) {
    return(
        <div className="bg-fuchsia-300 shadow-md pl-1 pr-1">
            <h1>Hall</h1>
            
            <div><Corridor question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}