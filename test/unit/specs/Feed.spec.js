import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Feed from '@/application/Feed/feed.vue'
import Post from '@/components/posts/posts.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Feed.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      loadPostsList: jest.fn(),
      loadCommentList: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('Expect to loaders actions be called on mount', () => {
    const wrapper = shallowMount(Feed, { store, localVue })
    //wrapper shouldn't be null/undefined
    expect(wrapper.vm).toBeTruthy()

    //post load action should be called after mount
    expect(actions.loadPostsList).toHaveBeenCalled()

    //comment load action should be called after mount
    expect(actions.loadCommentList).toHaveBeenCalled()
  })

  it('Post component was rendered', () => {
    const wrapper = shallowMount(Feed, { store, localVue })
    const post = wrapper.findComponent(Post)
    expect(post.exists()).toBe(true)
  })
})