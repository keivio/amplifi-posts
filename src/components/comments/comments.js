import { mapActions } from 'vuex'

export default {
  ...mapActions(['setCommentPost']),
  commentPost() {
    const params = {
      id: Math.round(Math.random() * 1000),
      postId: this.postId,
      name: this.model.name,
      email: this.model.email,
      body: this.model.comment
    }

    if(this.validate(params)) { 
      this.setCommentPost(params)
      this.cleanModel()
    }
  },

  validate(params) {
    let errMsg = []

    if (!params.name) errMsg.push('Name')
    if (!params.body) errMsg.push('Comment')

    if (errMsg.length) alert(`Please fill in the fields ${errMsg.join(' and ')} to leave a message`)

    return errMsg.length === 0
  },

  cleanModel() {
    this.model.name = '',
    this.model.comment = '',
    this.model.email = ''
  }
}