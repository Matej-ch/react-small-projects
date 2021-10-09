

const Clock = () => {
    return (<div>
        <svg className={'clock'} viewBox="0 0 100 100" width="100" height="100">
            <defs>
                {/*// filters describing the shadows, applied on the larger and smaller shapes*/}
                <filter id="shadow-large">
                    <feDropShadow dx="0" dy="0" stdDeviation="4"/>
                </filter>
                <filter id="shadow-small">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.2"/>
                </filter>

                {/*//mask used to cut out a sliver of the overlaid circle*/}
                <mask
                    id="mask">
                    <g transform="translate(50 50)">
                        {/*//starting at -15, incrementing by 30 for each hour*/}
                        <g
                            className="hours" transform="rotate(-15)">
                            <circle
                                cx="0"
                                cy="0"
                                r="50"
                                fill="#fff">
                            </circle>
                            <path
                                d="M 0 -50 v 50 l 28.86 -50"
                                fill="#000">
                            </path>
                        </g>
                    </g>
                </mask>
            </defs>

            <circle
                cx="50"
                cy="50"
                r="46"
                fill="#20232a">
            </circle>

            {/*// circle with the accent color, overlaid before the text elements -->*/}
            <circle
                cx="50"
                cy="50"
                r="42"
                fill="#61dafb"
                filter="url(#shadow-large)">
            </circle>

            {/*// text elements, positioned from the center around the clock -->*/}
            <g
                className="clock--face"
                font-size="8px"
                transform="translate(50 50)"
                text-anchor="middle"
                dominant-baseline="middle">

            </g>

            {/*// circle overlaid on the accent circle and text elements -->*/}
            <circle
                mask="url(#mask)"
                cx="50"
                cy="50"
                r="50"
                fill="#20232a">
            </circle>

            <circle
                cx="50"
                cy="50"
                r="4"
                filter="url(#shadow-small)"
                fill="#303335">
            </circle>

            <g
                className="hands"
                transform="translate(50 50)"
            >
                <g
                    className="minutes"
                    transform="rotate(240)">
                    <path
                        fill="#fff"
                        d="M -0.4 8 h 0.8 v -33 h -0.8 z">
                    </path>
                    <circle
                        fill="#303335"
                        cx="0"
                        cy="0"
                        r="0.6">
                    </circle>
                </g>

                <g
                    className="seconds"
                    transform="rotate(80)">
                    <path
                        fill="#61dafb"
                        d="M -0.4 10 h 0.8 v -45 h -0.8 z">
                    </path>
                    <circle
                        stroke-width="0.4"
                        stroke="#61dafb"
                        fill="#303335"
                        cx="0"
                        cy="0"
                        r="0.8">
                    </circle>
                </g>
            </g>
        </svg>
    </div>)
}

export default Clock;