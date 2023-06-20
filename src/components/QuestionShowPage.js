import QuestionDetails from "./QuestionDetails"
import AnswerDetails from "./AnswerDetails"

const QuestionShowPage = () => {
    return(
        <main>
            <QuestionDetails 
            title = "What is your favourite colour?" 
            body = "Red, blue, green, etc..."
            author = {{full_name: "John Doe"}}
            view_count = {34}
            created_at = {new Date()}
            updated_at = {new Date()}
            />
            <AnswerDetails
            title = "This the best answer"
            author={{full_name: "Lex De-Haan"}}
            created_at={new Date()}
            />
        </main>
    )
}

export default QuestionShowPage