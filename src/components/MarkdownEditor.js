import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = () => {

    const [markdown, setMarkdown] = useState('# supp');

    function handleChange(e) {
        setMarkdown(e.target.value)
    }

    return (
        <div className="pomodoro w-full h-screen bg-green-300 mx-auto flex justify-center">
            <div className="w-1/2 h-screen flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                <div className="h-3/4 p-4 w-1/2 bg-white rounded border border-gray-100">
                    <textarea onChange={handleChange } className="w-full h-full" value={markdown} />
                </div>

                <ReactMarkdown className="h-3/4 p-4 w-1/2 bg-gray-100 rounded border border-gray-200" source={markdown}/>

            </div>
        </div>
    );
};



export default MarkdownEditor;
