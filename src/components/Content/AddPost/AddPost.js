import React from 'react';

class AddPost extends React.Component {
    render() {
        return (
            <button className="AddPost" onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

export default AddPost;