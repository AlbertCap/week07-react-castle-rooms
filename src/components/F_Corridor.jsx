import Gallery from "./G_Gallery";

export default function Corridor({question, answer, handleAnswer}) {
    return(
        <div className="bg-stone-100 shadow-md pl-1 pr-1">
            <h1>Corridor</h1>
            
            <div><Gallery question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
);
}