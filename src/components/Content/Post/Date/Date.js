import React from 'react';

function Date({ date }) {
    return <span className="date">{date.toLocaleString}</span>;
}

export default Date;