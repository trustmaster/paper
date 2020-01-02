const selectPostById = (state, id) => state.posts.find((item) => item.id === id);

export default selectPostById;
