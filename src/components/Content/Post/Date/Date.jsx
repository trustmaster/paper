import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateEditable = React.forwardRef(({ value, onClick }, ref) => <span role="button" tabIndex={0} ref={ref} className="Date" onClick={onClick}>{value}</span>);

function Date({ date, onChange }) {
    return (
        <ReactDatePicker
            selected={date}
            onChange={onChange}
            customInput={<DateEditable />}
        />
    );
}

export default Date;
