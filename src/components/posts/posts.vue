<template>
  <div class="posts">
    <b-card
      v-for="post in getPostsList"
      :key="post.id"
      :title="post.title"
      class="mb-2"
    >
      <b-card-text>
        {{ post.body }}
      </b-card-text>

      <comments :postId="post.id"/>
    </b-card>
  </div>
</template>

<script>
import Comments from '../comments/comments.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Comments
  },

  computed: {
    ...mapGetters(['getPostsList'])
  }
}
</script>


