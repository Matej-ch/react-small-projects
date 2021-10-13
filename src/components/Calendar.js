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

        daysOnScreen(date.getFullYear(),date.getMonth());

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

    function daysOnScreen(y, m)
    {
        let daysArray = [];

        let d = new Date();

        // First day of the week in the selected month
        let  firstDayOfMonth = new Date(y, m, 1).getDay();

        // Last day of the selected month
        let lastDateOfMonth =  new Date(y, m+1, 0).getDate();

        // Last day of the previous month
        let lastDayOfLastMonth = m === 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

        let i = 1;
        do {
            let dow = new Date(y, m, i).getDay();
            let row = [];
            if (parseInt(dow) == 0 ) {
                row = [];
            } else if ( i == 1 ) {
                row = [];
                let k = lastDayOfLastMonth - firstDayOfMonth + 1;
                for(let j=0; j < firstDayOfMonth; j++) {
                    row.push(k);
                    //console.log('row',row);
                    k++;
                }
            }

            console.log('row',row);
            //let chk = new Date();
            //let chkY = chk.getFullYear();
            //let chkM = chk.getMonth();

            //if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
                //today
                row.push(i);
                //html += '<td class="today">' + i + '</td>';
            //} else {
                //row.push(i);
                //html += '<td class="normal">' + i + '</td>';
            //}

            if ( parseInt(dow) == 6) {
                daysArray.push(row);
                console.log('daysArray',daysArray);
                row = [];
            }else if ( i == parseInt(lastDateOfMonth)) {
                let k=1;
                for(dow; dow < 6; dow++) {
                    row.push(k);
                    //html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
            }

            i++;
        } while(i <= lastDateOfMonth);

        console.log(daysArray);
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