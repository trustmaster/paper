const selectPostIds = (state) => {
    return state.posts.map((post) => post.id);
};

export default selectPostIds;