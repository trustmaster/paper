import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateEditable = React.forwardRef(({ value, onClick }, ref) => <span ref={ref} className="Date" onClick={onClick}>{value}</span>);

const Date = ({ date, onChange }) => (
    <ReactDatePicker
        selected={date}
        onChange={onChange}
        customInput={<DateEditable />}
    />
);

export default Date;
