
const sampleAnswers = ['One','Two','Three','Four'];

const Question = () => {
    return (
        <div className="flex flex-col space-y-2">
            <h2>Question</h2>
            {sampleAnswers.map((answer,index) => (
                <button className="px-4 py-2 bg-blue-300" key={index}>answer</button>
            ))}
        </div>
    )
}

export default Question;