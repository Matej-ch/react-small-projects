import shuffle from 'lodash.shuffle'

const Question = ({ question, answerQuestion }) => {
    const answers = shuffle([...question.incorrect_answers,question.correct_answer]);

    return (
        <div className="flex flex-col space-y-2">
            <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
            {answers.map((answer,index) => (
                <button className="px-4 py-2 bg-blue-300" onClick={() => answerQuestion(answer)} key={index} dangerouslySetInnerHTML={{__html: answer}} />
            ))}
        </div>
    )
}

export default Question;