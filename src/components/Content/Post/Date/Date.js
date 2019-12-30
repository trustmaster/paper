import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateEditable = ({ value, onClick }) => {
    return <span className="Date" onClick={onClick}>{value}</span>;
}

const Date = ({ date, onChange }) => {
    return (<ReactDatePicker
        selected={date}
        onChange={onChange}
        customInput={<DateEditable />}
    />);
}

export default Date;