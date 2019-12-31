import React from 'react';
import MediumEditor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class Editor extends React.Component {
    render() {
        const opts = {
            toolbar: { buttons: [] },
            forcePlainText: true,
            cleanPastedHTML: true,
            disableReturn: true,
        };
        if (this.props.rich !== undefined) {
            opts.forcePlainText = false;
            opts.toolbar = { buttons: ['bold', 'italic', 'underline', 'quote', 'orderedlist', 'unorderedlist', 'removeFormat'] };
            opts.disableReturn = false;
        }
        return (
            <div className="Editor">
                <MediumEditor
                    text={this.props.text}
                    onChange={this.props.onChange}
                    options={opts}
                />
            </div>
        )
    }
}

export default Editor;