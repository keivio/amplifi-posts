import { mapActions } from 'vuex'

export default {
  ...mapActions(['loadPostsList', 'loadCommentList']),

  loadData() {
    this.loadPostsList()
    this.loadCommentList()
  }
}