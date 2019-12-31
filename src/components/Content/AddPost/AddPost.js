import React from 'react';

const AddPost = ({ text, onClick }) => {
    return (
        <button className="AddPost" onClick={onClick}>{text}</button>
    );
}

export default AddPost;