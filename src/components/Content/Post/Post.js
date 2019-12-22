import React from 'react';
import Date from './Date';

class Post extends React.Component {
    render() {
        const html = { __html: this.props.text };
        return (
            <div className="Post">
                <h2>{this.props.title}</h2>
                <h5 className="Date"><Date date={this.props.date} /></h5>
                {this.props.image && (<img src="{this.props.image}" alt="" />)}
                <div dangerouslySetInnerHTML={html}></div>
            </div>
        );
    }
}

export default Post;
