import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div className="Post">
                <h2>{this.props.title}</h2>
                <h5 className="Date">{this.props.date}</h5>
                {this.props.image && (<img src="{this.props.image}" alt="" />)}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Post;
