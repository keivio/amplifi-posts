import { PostsService } from '@/service/index'

const service = new PostsService()

export default {
  loadPostsList({ commit }) {
    service
      .GetAll()
      .then(response => {
        if (response) commit('SET_POSTS_LIST', response)
      })
      .catch(error => console.error(error))
  }
}
