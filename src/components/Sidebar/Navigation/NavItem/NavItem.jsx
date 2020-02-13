import React from 'react';
import DeletePost from '../../../Controls/DeletePost';

const NavItem = ({ id, title }) => (
    <li key={id}>
        <span>{title}</span>
        &nbsp;
        <DeletePost id={id} text="-" />
    </li>
);

export default NavItem;
