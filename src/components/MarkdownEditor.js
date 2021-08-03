import {useEffect, useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = () => {

    const textAreaRef = useRef(null);
    const [markdown, setMarkdown] = useState('# supp');
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");

    useEffect(() => {
        setParentHeight(`${textAreaRef.current.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
    }, [markdown]);

    function handleChange(e) {
        setTextAreaHeight("auto");
        setParentHeight(`${textAreaRef.current.scrollHeight}px`);
        setMarkdown(e.target.value)
    }

    return (
        <div className="markdown w-full h-full bg-green-300 mx-auto flex justify-center">
            <div className="w-1/2 flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                <div className="p-2 w-1/2 bg-white rounded border border-gray-100" style={{minHeight: parentHeight}}>
                    <textarea onChange={handleChange } className="w-full" value={markdown} ref={textAreaRef} rows={1} style={{height: textAreaHeight}}/>
                </div>

                <ReactMarkdown className="p-4 w-1/2 bg-gray-100 rounded border border-gray-200 overflow-auto" source={markdown}/>

            </div>
        </div>
    );
};

export default MarkdownEditor;
