export default {
  SET_COMMENT_LIST_BY_POST(state, commentList) {
    state.PostsCommentList = commentList
  },

  SET_COMMENT_BY_POST(state, comment) {
    state.PostsCommentList.push(comment)
  }
}
