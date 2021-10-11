import {useEffect, useState} from "react";

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

    const [month,setMonth] = useState(0);
    const [day,setDay] = useState(0);
    const [year,setYear] = useState(0);

    useEffect(() => {
        const date = new Date();

        setYear(date.getFullYear());
        setMonth(date.getMonth());
        setDay(date.getDate());

    },[]);

    const days = ['Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

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

    function nextMonth()
    {
        console.log(month);
        if ( month === 11 ) {
            setMonth(0);
            setYear(year => year + 1);
        }
        else {
            setMonth(month => month + 1);
        }
        currMonth();
    }

    function previousMonth()
    {
        if ( month === 0 ) {
            setMonth(11);
            setYear(year => year - 1);
        }
        else {
            setMonth(month => month - 1)
        }
        currMonth();
    }

    function currMonth()
    {

    }

    function daysOnScreen() {

    }

    return (
        <div className="flex flex-col justify-center w-full h-full items-center space-y-2 bg-gradient-to-b from-red-200 to-red-300">

            <div className="calendar">
                
                <div className="date-chooser flex flex-row justify-between w-full max-w-sm flex-wrap">

                    <div className={'flex flex-row justify-between w-full pb-4'}>
                        <button className={'font-bold text-white p-2 border rounded-sm hover:bg-gray-700'} onClick={previousMonth}>Previous</button>
                        <button className={'font-bold text-white p-2 border rounded-sm hover:bg-gray-700'} onClick={nextMonth}>Next</button>
                    </div>

                    <button className="date-chooser-button flex flex-col" onClick={() => setChoosingType('start')}>
                        Start date <span>{startDate}</span>
                    </button>
                    <button className="date-chooser-button flex flex-col"  onClick={() => setChoosingType('end')}>
                        End date <span>{endDate}</span>
                    </button>
                </div>

                <div className="flex flex-row flex-wrap max-w-sm font-bold justify-start">
                    <div className={'flex flex-col justify-center w-full'}>
                        <div className={'text-center'}>{ months[month] } { year }</div>
                        <div className={'flex justify-between px-4 mt-2'}>{ days.map((day,index) => {
                            return <div>{day}</div>
                        }) }</div>

                    </div>

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