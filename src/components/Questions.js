import Options from "./Options"

function Questions({question, dispatch, answer}) {

    return (
        <div>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    )
}

export default Questions
