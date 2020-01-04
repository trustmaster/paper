import React from 'react';

const DeletePost = ({ text, onClick }) => (
    <button type="button" className="DeletePost" onClick={onClick}>{text}</button>
);

export default DeletePost;
