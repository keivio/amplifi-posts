import { CommentsService } from '@/service/index'

const service = new CommentsService()

export default {
  getCommentListByPostId({ commit }, postId) {
    service
      .GetById(postId)
      .then(response => {
        if (response) commit('SET_COMMENT_LIST_BY_POST', response)
      })
      .catch(error => console.error(error))
  },

  loadCommentList({ commit }) {
    service
      .GetAll()
      .then(response => {
        if (response) commit('SET_COMMENT_LIST_BY_POST', response)
      })
      .catch(error => console.error(error))
  },

  setCommentPost({ commit }, payload) {
    if (!payload) return

    commit('SET_COMMENT_BY_POST', payload)
  }
}
