import React from 'react';
import DeletePost from '../../../Controls/DeletePost';

function NavItem({ id, title }) {
    return (
        <li key={id}>
            <span>{title}</span>
        &nbsp;
            <DeletePost id={id} text="-" />
        </li>
    );
}

export default NavItem;
