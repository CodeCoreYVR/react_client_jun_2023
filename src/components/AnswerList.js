import AnswerDetails from "./AnswerDetails"

const AnswerList = ({answers}) => {
    return(
        <div>
            {answers.map((answer, index) => {
                return <AnswerDetails
                    key={index}
                    body={answer.body}
                    author={answer.author}
                    created_at={answer.created_at}
                />
            })}
        </div>
    )
}

export default AnswerList;