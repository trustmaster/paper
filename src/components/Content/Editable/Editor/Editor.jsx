import React from 'react';
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

export default class Editor extends React.Component {
    componentDidMount() {
        const dom = this.node;
        const { rich, onChange, onBlur } = this.props;

        const opts = {
            toolbar: { buttons: [] },
            forcePlainText: true,
            cleanPastedHTML: true,
            disableReturn: true,
            disableExtraSpaces: true,
        };
        if (rich !== undefined) {
            opts.forcePlainText = false;
            opts.toolbar = { buttons: ['bold', 'italic', 'underline', 'quote', 'orderedlist', 'unorderedlist', 'removeFormat'] };
            opts.disableReturn = false;
        }

        this.medium = new MediumEditor(dom, opts);
        this.medium.subscribe('editableInput', () => {
            onChange(dom.innerHTML, this.medium);
        });
        this.medium.subscribe('blur', () => {
            onBlur(dom.innerHTML, this.medium);
        });
    }

    componentDidUpdate() {
        this.medium.restoreSelection();
    }

    componentWillUnmount() {
        this.medium.destroy();
    }

    render() {
        const { text, onChange } = this.props;

        const html = { __html: text };

        if (this.medium) {
            this.medium.saveSelection();
        }

        return (<div ref={(node) => { this.node = node; return node; }} className="Editor" dangerouslySetInnerHTML={html} onChange={onChange} />);
    }
}
