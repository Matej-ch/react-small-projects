import {motion} from "framer-motion";

const ResultModal = ({isCorrect,question,getQuestion}) => {

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    return (
        <motion.div animate={isCorrect !== null ? "open" : "closed"}
                    variants={variants}>

            <div className={'bg-gray-50 p-2'}>
                <div className="result-modal">

                    {isCorrect &&<h3 className={'bg-green-100 text-green-600 px-1 border-green-900 border-b border-green-300 mb-4'}>YOU WON</h3>}

                    {!isCorrect && <h3 className={'bg-red-100 text-red-600 px-1 border-b border-red-300'}>YOU LOST</h3>}

                    {!isCorrect && (
                        <div className={'my-2'}>
                            <small>The correct answer was:</small>
                            <br/>
                            <strong dangerouslySetInnerHTML={{__html:question.correct_answer }} />
                        </div>
                    )}


                    <button className={'text-center w-full bg-blue-900 hover:bg-blue-700 rounded-md text-white py-3 font-medium'} onClick={getQuestion}>Go to next question</button>
                </div>
            </div>
        </motion.div>

    )
}

export default ResultModal;