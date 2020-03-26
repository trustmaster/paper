import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { handleDialog } from '../../../state/actions';

const ConfirmModal = ({
    isOpen,
    id,
    label,
    confirmationText,
    yesText,
    noText,
    handleButton,
}) => (
    <div>
        <ReactModal
            isOpen={isOpen}
            contentLabel={label}
        >
            <div>{confirmationText}</div>
            <button type="button" className="confirmYes" onClick={() => handleButton(id, true)}>{yesText}</button>
            <button type="button" className="confirmNo" onClick={() => handleButton(id, false)}>{noText}</button>
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

const mapDispatchToProps = (dispatch) => ({
    handleButton: (id, result) => {
        dispatch(handleDialog(id, result));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
