import React from 'react';
import Editor from './Editor';
import onClickOutside from "react-onclickoutside";

class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.isEditing = true;
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
        this.props.onChange(this.updatedText);
        this.updatedText = '';
    }

    render() {
        const html = { __html: this.props.text };
        return (
            <span className="Editable">
                {this.isEditing ? (
                    <Editor rich={this.props.rich} text={this.props.text} onChange={this.handleChange} />
                ) : (
                        <span className="static" dangerouslySetInnerHTML={html}></span>
                    )}
            </span>
        );
    }
}

export default onClickOutside(Editable);