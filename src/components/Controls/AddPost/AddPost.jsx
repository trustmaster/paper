import React from 'react';

const AddPost = ({ text, onClick }) => (
    <button type="button" className="AddPost" onClick={onClick}>{text}</button>
);

export default AddPost;
