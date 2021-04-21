import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Comment from '@/application/Feed/feed.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('Feed.vue', () => {
  let actions
  let getters
  let store
  let model = { name: '', email: '', comment: ''}

  beforeEach(() => {
    actions = {
      loadPostsList: jest.fn(),
      loadCommentList: jest.fn(),
      setCommentPost: jest.fn()
    },
    getters = {
      getPostCommentList: () => [{
        id:1,
        postId:1,
        body: "test",
        email:"test@teste",
        name:"test",
      }]
    },
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('Comment component was rendered', () => {
    const wrapper = shallowMount(Comment, { store, localVue })
    const comment = wrapper.findComponent(Comment)
    expect(comment.exists()).toBe(true)
  })

  it('Is visible when mounted', () => {
    const wrapper = shallowMount(Comment, { store, localVue })
    expect(wrapper.isVisible()).toBe(true)
  })

  it('Model state is empty', () => {
    const wrapper = shallowMount(Comment, { store, localVue, data() { return { model } } })

    expect(wrapper.vm.$data.model.name).toBe('')
    expect(wrapper.vm.$data.model.email).toBe('')
    expect(wrapper.vm.$data.model.comment).toBe('')
  })

  it('Model state is changed', () => {
    const wrapper = shallowMount(Comment, { store, localVue, data() { return { model } } })

    wrapper.setData({ model: { name: 'test', email: 'emailTest', comment: 'commentTest' }})

    expect(wrapper.vm.$data.model.name).toBe('test')
    expect(wrapper.vm.$data.model.email).toBe('emailTest')
    expect(wrapper.vm.$data.model.comment).toBe('commentTest')
  })

  /* TODO Test setCommentPost action */
  /* TODO Test Validation fn */
  /* TODO Test CleanModel fn */
})