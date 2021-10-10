import {useEffect, useRef, useState} from "react";
import anime from "animejs";


const Clock = () => {

    const clockNumbersRef = useRef(null);

    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const zeroPadded = number => ((number >= 10) ? number.toString() : `0${number}`);

    function startTimer() {
        if(intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {

            let sec = getCurrentSeconds();
            if(sec > 59) {
                sec = 0;
            }

            let mins = getCurrentMinutes();
            if(mins > 59) {
                mins = 0;
            }

            let hour = getCurrentHours();
            if(hour > 12) {
                hour -= 12;
            }

            setSeconds(sec);
            setMinutes(mins);
            setHours(hour);
            animate('seconds',sec);
            animate('minutes',mins);
            //animate('hours',hour);
        },1000)
    }

    useEffect(() => {
        const clockFace = clockNumbersRef.current;

        for (let i = 0; i < 12; i += 1) {
            clockFace.innerHTML += `<text fill="white" stroke-width="0.2" stroke="black" style="font-weight: bold" transform="rotate(${-90 + 30 * (i + 1)}) translate(34 0) rotate(${90 - 30 * (i + 1)})" > ${zeroPadded(i + 1)}</text>`;
        }

        const date = new Date();
        setSeconds(date.getSeconds());
        setMinutes(date.getMinutes());
        setHours(date.getHours());

        startTimer();

        }, []);

    const getCurrentSeconds = () => {
        const date = new Date();

        return date.getSeconds();
    }

    const getCurrentMinutes = () => {
        const date = new Date();

        return date.getMinutes();
    }

    const getCurrentHours = () => {
        const date = new Date();

        return date.getHours();
    }

    const animate = (type,value) => {
        anime({
            targets: `g.${type}`,
            transform: (type === 'hours') ? `rotate(${-15 + value * 30})` : `rotate(${value * 6})`,
            duration: 200,
        });
    }

    const setRotation = (type) => {
        const date = new Date();
        if(type === 'hours') {
            return `rotate(${-15 + date.getHours() * 30})`;
        }

        if(type === 'minutes') {
            return `rotate(${date.getMinutes() * 6})`;
        }

        return `rotate(${date.getSeconds() * 6})`;
    }

    return (<div className={'flex justify-center h-full bg-gray-300'}>
        <svg className={'clock'} viewBox="0 0 100 100">

            { /* definition of shadows and mask */}
            <defs>
                <filter id="shadow-large">
                    <feDropShadow dx="0" dy="0" stdDeviation="2"/>
                </filter>
                <filter id="shadow-small">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.2"/>
                </filter>

                <filter id="shadow-seconds">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.2" floodColor={'#9ce7fc'}/>
                </filter>

                <filter id="shadow-minutes">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.2" floodColor={'white'}/>
                </filter>

                <mask id="mask">
                    <g transform="translate(50 50)">
                        <g className="hours" transform={setRotation('hours')}>
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
                r="44"
                fill="#041d58">
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
                ref={clockNumbersRef}
                className="clock--face text-white"
                fontSize="8px"
                transform="translate(50 50)"
                textAnchor="middle"
                dominantBaseline="middle">

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
                r="2.5"
                filter="url(#shadow-small)"
                fill="#303335">
            </circle>

            <g className="hands" transform="translate(50 50)">
                <g className="minutes" transform={setRotation('minutes')}>
                    <path fill="#fff" d="M -0.4 8 h 0.8 v -33 h -0.8 z"  filter="url(#shadow-minutes)">
                    </path>
                    <circle
                        fill="#303335"
                        cx="0"
                        cy="0"
                        r="0.6">
                    </circle>
                </g>

                <g className="seconds" transform={setRotation('seconds')}>
                    <path fill="#61dafb" d="M -0.4 10 h 0.8 v -45 h -0.8 z"  filter="url(#shadow-seconds)">
                    </path>
                    <circle
                        strokeWidth="0.4"
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