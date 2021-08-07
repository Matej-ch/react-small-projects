import {useState} from "react";

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

function daysInMonth(currentMonth, currentYear) {
    return 32 - new Date(currentYear, currentMonth, 32).getDate();
}

const Calendar = () => {
    const [choosingType, setChoosingType] = useState('start');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const calendarDates = Array(daysInMonth(currentMonth,currentYear)).fill(0).map((e,i) => i);

    function updateDate(chosenDay) {

        if(startDate && chosenDay < startDate) {
            setStartDate(chosenDay);
            return setChoosingType('end');
        }

        if(endDate && chosenDay > endDate) {
            setEndDate(chosenDay);
            return setChoosingType('start');
        }

        if(choosingType === 'start') {
            setStartDate(chosenDay);
            return setChoosingType('end');
        }

        if(choosingType === 'end') {
            setEndDate(chosenDay);
        }

    }

    return (
        <div className="flex flex-col justify-center w-full h-full items-center space-y-2 bg-gradient-to-b from-red-200 to-red-300">

            <div className="calendar">
                <div className="date-chooser flex flex-row justify-between w-full max-w-sm">
                    <button className="date-chooser-button flex flex-col" onClick={() => setChoosingType('start')}>
                        Start date <span>{startDate}</span>
                    </button>
                    <button className="date-chooser-button flex flex-col"  onClick={() => setChoosingType('end')}>
                        End date <span>{endDate}</span>
                    </button>
                </div>

                <div className="flex flex-row flex-wrap max-w-sm font-bold justify-start">
                    <div>
                        {calendarDates.map((day,index) => {
                            const dayNum = day + 1;
                            let isSelected = dayNum  === startDate || dayNum === endDate;

                            return <button key={index} className={`calendar-day  ${isSelected ? ' calendar-day-selected' : ''}`} onClick={() => updateDate(dayNum)}>
                                {dayNum}
                            </button>
                        }) }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Calendar;