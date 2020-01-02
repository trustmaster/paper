import React from 'react';
import Date from './Date';
import Editable from '../Editable';

const Post = ({
    data, onTitleChange, onDateChange, onTextChange,
}) => {
    const {
        title, date, image, text,
    } = data;
    return (
        <div className="Post">
            <h2><Editable text={title} onChange={onTitleChange} /></h2>
            <h5 className="Date"><Date date={date} onChange={onDateChange} /></h5>
            {image && (<img src="{image}" alt="" />)}
            <div className="Text">
                <Editable rich="true" text={text} onChange={onTextChange} />
            </div>
        </div>
    );
};

export default Post;
