import React from 'react';
import Date from './Date';
import Editable from '../Editable';

const Post = ({ data }) => {
    const { title, date, image, text } = data;
    return (
        <div className="Post">
            <h2><Editable text={title} /></h2>
            <h5 className="Date"><Date date={date} /></h5>
            {image && (<img src="{image}" alt="" />)}
            <div class="Text">
                <Editable rich="true" text={text} />
            </div>
        </div>
    );
}

export default Post;
