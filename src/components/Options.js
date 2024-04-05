function Options({question, dispatch, answer}) {


const hasAnswered = answer !== null;

    return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">
                {question.options.map((res, index)=> 
                <button 
                 className={`btn btn-option ${index === answer ? "answer" : ""}
                 ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`} 
                 key={res}
                 disabled={hasAnswered}
                 onClick={()=> dispatch({type: "newAnswer", payload: index})}
                 >

                    {res}
                    </button>)}
            </div>
        </div>
    )
}

export default Options
