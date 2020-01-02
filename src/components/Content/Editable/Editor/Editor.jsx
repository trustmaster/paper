import React from 'react';
import MediumEditor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const Editor = ({ rich, text, onChange }) => {
    const opts = {
        toolbar: { buttons: [] },
        forcePlainText: true,
        cleanPastedHTML: true,
        disableReturn: true,
    };
    if (rich !== undefined) {
        opts.forcePlainText = false;
        opts.toolbar = { buttons: ['bold', 'italic', 'underline', 'quote', 'orderedlist', 'unorderedlist', 'removeFormat'] };
        opts.disableReturn = false;
    }
    return (
        <div className="Editor">
            <MediumEditor text={text} onChange={onChange} options={opts} />
        </div>
    );
};

export default Editor;
