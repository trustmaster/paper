const selectPostById = (state, id) => {
    return state.posts.find((item) => item.id === id);
}

export default selectPostById;