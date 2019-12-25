import React from 'react';
import Date from './Date';
import Editable from '../Editable';

class Post extends React.Component {
    render() {

        return (
            <div className="Post">
                <h2><Editable text={this.props.title} /></h2>
                <h5 className="Date"><Date date={this.props.date} /></h5>
                {this.props.image && (<img src="{this.props.image}" alt="" />)}
                <div class="Text">
                    <Editable rich="true" text={this.props.text} />
                </div>
            </div>
        );
    }
}

export default Post;
