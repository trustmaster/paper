import React from 'react';
import Editor from './Editor';

export default class Editable extends React.Component {
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

    handleBlur = () => {
        if (this.updatedText === '') {
            return;
        }
        const { rich, onChange } = this.props;
        const text = rich ? this.updatedText : this.unescape(this.updatedText);
        onChange(text);
        this.updatedText = '';
    }

    unescape = (text) => text.replace('&amp;', '&')
        .replace('&quot;', '"')
        .replace('&lt;', '<')
        .replace('&gt;', '>')
        .replace('&nbsp;', '')
        .trim()

    render() {
        const { rich, text } = this.props;
        const html = { __html: text };
        return (
            <span className="Editable">
                {this.isEditing ? (
                    <Editor
                        rich={rich}
                        text={text}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                ) : (<span className="static" dangerouslySetInnerHTML={html} />)}
            </span>
        );
    }
}
