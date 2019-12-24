import React from 'react';
import Editable from './Editable/Editable';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            isEditing: true, // false
        }
    }

    handleChange = (text) => {
        // TODO manage state via Redux
        this.setState({ text });
    }

    render() {
        const html = { __html: this.state.text };
        return (
            <div className="Text">
                {this.state.isEditing ? (
                    <Editable text={this.state.text} onChange={this.handleChange} />
                ) : (
                        <div className="TextStatic" dangerouslySetInnerHTML={html}></div>
                    )}
            </div>
        );
    }
}

export default Text;