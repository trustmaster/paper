const selectPostIds = (state) => state.posts.map((post) => post.id);

export default selectPostIds;
