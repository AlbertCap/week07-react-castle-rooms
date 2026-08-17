import Nook from "./H_Nook";

export default function Gallery({question, answer, handleAnswer}) {
    return(
        <div className="bg-emerald-500 shadow-md pl-1 pr-1">
            <h1>Gallery</h1>
           
            <div><Nook question={question} answer={answer} handleAnswer={handleAnswer}/></div>
        </div>
);
}