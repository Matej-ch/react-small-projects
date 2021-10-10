import {useEffect, useRef, useState} from "react";
import anime from "animejs";


const Clock = () => {

    const clockNumbersRef = useRef(null);

    //const [now,setNow] = useState();
    //const [hours,setHours] = useState(now.getHours());
    //const [minutes,setMinutes] = useState(now.getMinutes());
    const [seconds,setSeconds] = useState(0);
    //const [time,setTime] = useState({});
    //const [rotation,setRotation] = useState({});
    const intervalRef = useRef(null);

    const zeroPadded = number => ((number >= 10) ? number.toString() : `0${number}`);
    const twelveClock = (twentyFourClock) => {
        if (twentyFourClock === 0) {
            return 12;
        } if (twentyFourClock > 12) {
            return twentyFourClock - 12;
        }
        return twentyFourClock;
    };

    function startTimer() {
        if(intervalRef.current !== null) return;

        //console.log(seconds);

        intervalRef.current = setInterval(() => {
            //getCurrentTime();
            anime({
                targets: `g.seconds`,
                transform: `rotate(${getCurrentTime() * 6})`,
                duration: 300,
            });
            //setSeconds(sec => sec + 1);
            //seconds++;
            //setSeconds(seconds => seconds++)
        },1000)
    }

    /*function updateClock(instructions) {
        const { key, operation } = instructions;
        const { timeValue, rotationValue } = instructions;

        // create a number of degrees based on the previous value and the current operation
        const degrees = operation === '+' ? rotationValue + 1 : rotationValue - 1;
        // create a number of hours/minutes/seconds on the basis of the operation
        let value = operation === '+' ? timeValue + 1 : timeValue - 1;

        // format the value to fall in the prescribed range
        if (key === 'hours') {
            value = value > 12 ? 1 : value === 0 ? 12 : value;
        } else {
            value = value > 59 ? 0 : value < 0 ? 59 : value;
        }

        // return the updated time and rotation value
        return { value, degrees };
    }*/

    useEffect(() => {
        const clockFace = clockNumbersRef.current;

        for (let i = 0; i < 12; i += 1) {
            clockFace.innerHTML += `<text fill="white" stroke-width="0.2" stroke="black" style="font-weight: bold" transform="rotate(${-90 + 30 * (i + 1)}) translate(34 0) rotate(${90 - 30 * (i + 1)})" > ${zeroPadded(i + 1)}</text>`;
        }

        console.log('seconds first:',seconds);

        getCurrentTime();

        console.log('seconds second:',seconds);
        //console.log(seconds);
        /*setTime({
            hours: twelveClock(hours), // 1-12
            minutes, // 0-59
            seconds, // 0-59
        });*/

        /*setRotation({
            hours: twelveClock(hours),
            minutes,
            seconds,
        });*/

        /*const entries = Object.entries(time);
        entries.forEach(([key, value]) => {
            anime({
                targets: `g.${key}`,
                transform: (key === 'hours') ? `rotate(${-15 + value * 30})` : `rotate(${value * 6})`,
                duration: 1000,
            });
        })*/

        startTimer();
        }, []);

    /*useEffect(() => {

    })*/
    const getCurrentTime = () => {
        const date = new Date();

        return date.getSeconds();
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
                        <g className="hours" transform="rotate(-15)">
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
                <g
                    className="minutes"
                    transform="rotate(240)">
                    <path
                        fill="#fff"
                        d="M -0.4 8 h 0.8 v -33 h -0.8 z"  filter="url(#shadow-minutes)">
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
                        d="M -0.4 10 h 0.8 v -45 h -0.8 z"  filter="url(#shadow-seconds)">
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