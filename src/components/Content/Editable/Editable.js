import React from 'react';
import Editor from './Editor';
import onClickOutside from "react-onclickoutside";

class Editable extends React.Component {
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
            <span className="Editable">
                {this.state.isEditing ? (
                    <Editor rich={this.props.rich} text={this.state.text} onChange={this.handleChange} />
                ) : (
                        <span className="static" dangerouslySetInnerHTML={html}></span>
                    )}
            </span>
        );
    }
}

export default onClickOutside(Editable);