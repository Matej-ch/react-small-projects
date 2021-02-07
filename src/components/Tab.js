import { useState } from 'react';
function Tab({children}) {

    const [highlightStyle,setHighlightStyle] = useState({left: 0})

    function moveHighlight(e) {
        setHighlightStyle({left:  e.nativeEvent.layerX - 100});
    }

    function hideHighLight(e) {
        setHighlightStyle({
            opacity: 0,
            left: e.nativeEvent.layerX - 100,
        })
    }

    return (
        <div onMouseMove={moveHighlight} onMouseOut={hideHighLight} className="relative overflow-hidden text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            <div className="highlight" style={highlightStyle} />
            {children}
        </div>
    )
}

export default Tab;