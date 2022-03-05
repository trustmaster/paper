import React from 'react';
import { connect } from 'react-redux';
import Date from './Date';
import Editable from '../Editable';
import selectPostById from './PostSelectors';
import { setPostTitle, setPostDate, setPostText } from '../../../state/actions';

function Post({
    data, onTitleChange, onDateChange, onTextChange,
}) {
    const {
        title, date, image, text,
    } = data;
    return (
        <div className="Post">
            <h2><Editable text={title} onChange={onTitleChange} /></h2>
            <h5 className="Date"><Date date={date} onChange={onDateChange} /></h5>
            {image && (<img src="{image}" alt="" />)}
            <div className="Text">
                <Editable rich="true" text={text} onChange={onTextChange} />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    data: selectPostById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTitleChange: (text) => {
        dispatch(setPostTitle(ownProps.id, text));
    },
    onDateChange: (date) => {
        dispatch(setPostDate(ownProps.id, date));
    },
    onTextChange: (text) => {
        dispatch(setPostText(ownProps.id, text));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
