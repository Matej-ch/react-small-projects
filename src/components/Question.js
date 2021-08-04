import shuffle from 'lodash.shuffle'

const Question = ({ question, answerQuestion }) => {
    const answers = shuffle([...question.incorrect_answers,question.correct_answer]);

    return (
        <div className="flex flex-col space-y-2 text-sm mt-2">
            <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
            {answers.map((answer,index) => (
                <button className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100" onClick={() => answerQuestion(answer)} key={index} dangerouslySetInnerHTML={{__html: answer}} />
            ))}
        </div>
    )
}

export default Question;