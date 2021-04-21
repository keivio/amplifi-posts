<template>
  <div class="feed-container">
    <Posts />
  </div>
</template>

<script>
import FeedMethods from './feed.js'
import Posts from '@/components/posts/posts.vue'

export default {
  components: {
    Posts
  },

  mounted() {
    this.loadData()
  },

  methods: FeedMethods,
}
</script>