import React, { useState } from 'react'
import Button from '../ui/Button';
import classes from './event-search.module.css'

function EventsSearch({ onSearch }) {
    const [yearValue, setYearValue] = useState(2021);
    const [monthValue, setMonthValue] = useState(1);

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const formSubmitHandler = e => {
        e.preventDefault();
        console.log(yearValue, monthValue)
        onSearch(yearValue, monthValue)

    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'></label>
                    <select id='year' onChange={e => setYearValue(e.target.value)}>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='month'></label>
                    <select id='month' onChange={e => setMonthValue(e.target.value)}>
                        {months.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
                    </select>
                </div>
            </div>
            <Button>Find Event</Button>
        </form>
    )
}

export default EventsSearch
