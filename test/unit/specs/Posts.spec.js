import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'

import Post from '@/components/posts/posts.vue'
import Comment from '@/components/comments/comments.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('Feed.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      getPostsList: () => [{ body: 'post body' }]
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('Expect card rendered and content set on body of it', () => {
    const wrapper = shallowMount(Post, { store, localVue })
    const bodyText = wrapper.find('div')

    expect(bodyText.text()).toBe(getters.getPostsList()[0].body)
  })

  it('Comment component was rendered', () => {
    const wrapper = shallowMount(Post, { store, localVue })
    const comment = wrapper.findComponent(Comment)
    expect(comment.exists()).toBe(true)
  })
})