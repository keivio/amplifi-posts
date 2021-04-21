<template>
    <div class="comments-container">
      <div class="comments-info" >
        <div @click="visible = !visible" class="icon-comment">
          <b-icon icon="chat-left-text" @click="visible = !visible" />
          <b>{{ getPostCommentList.filter(p => p.postId === postId).length }} Comments</b>
        </div>
      </div>

      <b-collapse :id="'comments_' + postId" v-model="visible">
        <div>
          <b-list-group>
            <b-list-group-item v-for="comment in getPostCommentList.filter(p => p.postId === postId)" :key="comment.id">
              <div class="post-comment-container">
                <div class="post-comment-container__user mb-4">
                  <b-avatar :src="`https://avatars.dicebear.com/api/avataaars/${comment.id}.svg`" />
                  <div class="post-comment-container__user-info">
                    <b>{{comment.name}}</b>
                    <span>{{comment.email}}</span>
                  </div>
                </div>

                <p>{{comment.body}}</p>
              </div>
            </b-list-group-item>

            <b-list-group-item>
              <b-form-input id="nameInput" v-model="model.name" placeholder="Enter your name" class="mt-1"/>
              <b-form-input id="emailInput" v-model="model.email" placeholder="Enter your email (optional)" class="mt-1"/>
              <b-form-textarea id="commentInput" v-model="model.comment" placeholder="Leave a comment" class="mt-1"/>

              <b-overlay
                :show="loading"
                rounded
                opacity="0.9"
                spinner-small
                spinner-variant="success"
                class="d-inline-block"
              >
                <b-button id="btnComment" variant="success" class="mt-1" @click="commentPost">Comment</b-button>
              </b-overlay>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-collapse>
    </div>
</template>

<script>

import CommentsMethods from './comments.js'
import { mapGetters } from 'vuex'

export default {
  props: {
    postId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      visible: false,
      loading: false,
      model: { 
        comment: '',
        name: '',
        email: ''
      }
    }
  },

  methods: CommentsMethods,

  computed: {
    ...mapGetters(['getPostCommentList'])
  }
}
</script>
