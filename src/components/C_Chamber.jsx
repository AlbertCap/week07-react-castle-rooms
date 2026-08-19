import Room from "./D_Room";

export default function Chamber({question, answer, handleAnswer}){
    return (
        <div className="bg-yellow-100 shadow-md pl-1 pr-1">
            <h1>Chamber</h1>
             
            <div><Room question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
    );
}
