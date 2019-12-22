import React from 'react';

function Date({ date }) {
    return <span>{date.toLocaleDateString()}</span>;
}

export default Date;