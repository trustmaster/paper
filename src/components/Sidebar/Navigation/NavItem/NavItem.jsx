import React from 'react';
import DeletePostContainer from '../../../Controls/DeletePost/DeletePostContainer';

const NavItem = ({ id, title }) => (
    <li key={id}>
        <span>{title}</span>
        &nbsp;
        <DeletePostContainer id={id} text="-" />
    </li>
);

export default NavItem;
