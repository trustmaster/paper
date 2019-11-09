import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <h4>Contents</h4>
                <ul>
                    <li>How I got my first cat</li>
                    <li>How I got my second cat</li>
                    <li><button>+</button></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
