import React from 'react';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class Editable extends React.Component {
    render() {
        return (
            <div className="Editable">
                <Editor
                    text={this.props.text}
                    onChange={this.props.onChange}
                    options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
            </div>
        )
    }
}

export default Editable;