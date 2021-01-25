import { useState } from 'react';
import './InputForm.css';

export default function InputForm(props) {
    const {onAddClock} = props;

    const [city, setCity] = useState('');
    const [timezone, setTimezone] = useState('');

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeTimezone = (e) => {
        setTimezone(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAddClock(city, timezone);
        setCity('');
        setTimezone('');
    }

    return (
        <form className="ClockForm" onSubmit={onSubmitHandler}>
            <div className="BlockCity InputBlock">
                <span className="LabelCity">Название</span>
                <input type="text" className="InputCity" value={city} onChange={onChangeCity}></input>
            </div>
            <div className="BlockTimezone InputBlock">
                <span className="LabelTimezone">Название</span>
                <input type="text" className="InputTimezone" value={timezone} onChange={onChangeTimezone}></input>
            </div>
            <button className="AddBtn" onClick={onSubmitHandler}>Добавить</button>
        </form>
    )
}