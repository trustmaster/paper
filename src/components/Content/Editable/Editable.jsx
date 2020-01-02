import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Editor from './Editor';

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
        const { onChange } = this.props;
        onChange(this.updatedText);
        this.updatedText = '';
    }

    render() {
        const { rich, text } = this.props;
        const html = { __html: text };
        return (
            <span className="Editable">
                {this.isEditing ? (
                    <Editor rich={rich} text={text} onChange={this.handleChange} />
                ) : (<span className="static" dangerouslySetInnerHTML={html} />)}
            </span>
        );
    }
}

export default onClickOutside(Editable);