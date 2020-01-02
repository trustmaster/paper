import { connect } from 'react-redux';
import Content from './Content';
import selectPostIds from './ContentSelectors';

const mapStateToProps = (state) => ({
    title: state.title,
    description: state.description,
    postIds: selectPostIds(state),
});

const ContentContainer = connect(mapStateToProps)(Content);
export default ContentContainer;
