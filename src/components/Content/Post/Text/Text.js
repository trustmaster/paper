import React from 'react';
import Editable from './Editable/Editable';
import onClickOutside from "react-onclickoutside";

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            isEditing: true,
        };
        this.updatedText = '';
    }

    handleChange = (text) => {
        // Don't mutate React state while typing: this resets the cursor.
        // Instead, update the state when Save action is triggered (e.g. click outside).
        // Changed text is stored outside of React state as a workaround
        this.updatedText = text;
    }

    handleClickOutside = () => {
        if (this.updatedText === '') {
            return;
        }
        this.setState({ text: this.updatedText });
        this.updatedText = '';
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

export default onClickOutside(Text);