import React from 'react';
import Date from './Date';
import Text from './Text';

class Post extends React.Component {
    render() {

        return (
            <div className="Post">
                <h2>{this.props.title}</h2>
                <h5 className="Date"><Date date={this.props.date} /></h5>
                {this.props.image && (<img src="{this.props.image}" alt="" />)}
                <Text id={this.props.id} text={this.props.text} />
            </div>
        );
    }
}

export default Post;
