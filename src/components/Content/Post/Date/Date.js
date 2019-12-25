import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateEditable({ value, onClick }) {
    return <span className="Date" onClick={onClick}>{value}</span>;
}

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
        };
    }
    handleChange = (date) => {
        this.setState({ date });
    }
    render() {
        return (<ReactDatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            customInput={<DateEditable />}
        />);
    }
}

export default Date;