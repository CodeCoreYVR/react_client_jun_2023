import QuestionDetails from "./QuestionDetails"
import AnswerDetails from "./AnswerDetails"
import AnswerList from "./AnswerList"

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
            <AnswerList
            answers={[
                {body: "Answer 1",  author: {full_name: "Steve Jobs"}, created_at: new Date()},
                {body: "Answer 2",  author: {full_name: "Jeff Bezos"}, created_at: new Date()},
                {body: "Answer 3",  author: {full_name: "Elon Musk"}, created_at: new Date()},
            ]}
            />
        </main>
    )
}

export default QuestionShowPage