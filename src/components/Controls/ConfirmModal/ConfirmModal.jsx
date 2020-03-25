import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { closeDialog } from '../../../state/actions';

const ConfirmModal = ({
    isOpen,
    label,
    confirmationText,
    yesText,
    noText,
    handleYes,
    handleNo,
}) => (
    <div>
        <ReactModal
            isOpen={isOpen}
            contentLabel={label}
        >
            <div>{confirmationText}</div>
            <button type="button" className="confirmYes" onClick={handleYes}>{yesText}</button>
            <button type="button" className="confirmNo" onClick={handleNo}>{noText}</button>
        </ReactModal>
    </div>

);

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.dialog.isOpen,
    id: state.dialog.id,
    label: state.dialog.label,
    confirmationText: state.dialog.text,
    yesText: ownProps.yesText,
    noText: ownProps.noText,
});

const mapDispatchToProps = (dispatch, { id }) => ({
    handleYes: () => {
        // dispatch(deletePost(id));
        dispatch(closeDialog(id));
    },
    handleNo: () => {
        console.log('No');
        dispatch(closeDialog(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
