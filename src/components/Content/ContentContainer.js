import { connect } from 'react-redux';
import Content from './Content';
import selectPostIds from './ContentSelectors';
import { setTitle, setDescription } from '../../state/actions';

const mapStateToProps = (state) => ({
    title: state.title,
    description: state.description,
    postIds: selectPostIds(state),
});

const mapDispatchToProps = (dispatch) => ({
    onTitleChange: (text) => {
        dispatch(setTitle(text));
    },
    onDescriptionChange: (text) => {
        dispatch(setDescription(text));
    },
});

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ContentContainer;
