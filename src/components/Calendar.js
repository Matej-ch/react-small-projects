import {useEffect, useState} from "react";

const Calendar = () => {
    const [choosingType, setChoosingType] = useState('start');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const date = new Date();

    const [month,setMonth] = useState(date.getMonth());
    const [day,setDay] = useState(date.getDate());
    const [year,setYear] = useState(date.getFullYear());
    const [daysInMonth,setDaysInMonth] = useState([]);

    useEffect(() => {
        daysOnScreen(date.getFullYear(),date.getMonth());

    },[]);

    useEffect(() => {
        daysOnScreen(year,month);
    }, [month,year])

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
        if ( month === 11 ) {
            setMonth(0);
            setYear(year => year + 1);
        }
        else {
            setMonth(month => month + 1);
        }
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
    }

    function daysOnScreen(y, m)
    {
        // First day of the week in the selected month
        let  firstDayOfMonth = new Date(y, m, 1).getDay();

        // Last day of the selected month
        let lastDateOfMonth =  new Date(y, m+1, 0).getDate();

        // Last day of the previous month
        let lastDayOfLastMonth = m === 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

        let i = 1;
        let row = [];
        let daysArray = [];
        do {
            let dayOfWeek = new Date(y, m, i).getDay();

            if (parseInt(dayOfWeek) === 0 ) {
                row = [];
            } else if ( i === 1 ) {
                row = [];
                let k = lastDayOfLastMonth - firstDayOfMonth + 1;
                for(let j = 0; j < firstDayOfMonth; j++) {
                    row.push(k);
                    k++;
                }
            }

            row.push(i);

            if ( parseInt(dayOfWeek) === 6) {
                daysArray.push(row);
                row = [];
            }else if ( i === parseInt(lastDateOfMonth)) {
                let k=1;
                for(dayOfWeek; dayOfWeek < 6; dayOfWeek++) {
                    row.push(k);
                    k++;
                }
                daysArray.push(row);
            }

            i++;
        } while(i <= lastDateOfMonth);

        setDaysInMonth(daysArray);
    }

    return (
        <div className="flex flex-col justify-center w-full h-full items-center space-y-2 bg-gradient-to-b from-red-200 to-red-300">

            <div className="calendar">
                
                <div className="date-chooser flex flex-row justify-between w-full max-w-sm flex-wrap">

                    <div className={'flex flex-row justify-between w-full pb-4'}>
                        <button className={'font-bold text-white p-2 border rounded hover:bg-gray-700'} onClick={previousMonth}>Previous</button>
                        <button className={'font-bold text-white p-2 border rounded hover:bg-gray-700'} onClick={nextMonth}>Next</button>
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

                    <div className={'flex justify-between px-4 mt-2 flex-wrap'}>
                        {daysInMonth.map((daysInWeek,index) =>
                            daysInWeek.map((day,jindex) => {
                                const dayNum = day;
                                let isSelected = dayNum  === startDate || dayNum === endDate;

                                return <button key={jindex} className={`calendar-day  ${isSelected ? ' calendar-day-selected' : ''}`} onClick={() => updateDate(dayNum)}>
                                    {dayNum}
                                </button>
                            })
                        ) }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Calendar;