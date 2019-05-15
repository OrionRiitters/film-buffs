<template>
  <div class="forum">
    <div class="comment-form">
      <textarea v-model="newCommentValue" draggable="false" rows="4" cols="50">
      </textarea>
      <button>Submit Comment</button>
    </div>
    <div class="comment-list" v-for="comment in comments">
      <div class="comment">
        <h3>{{ comment.userID }} says:</h3>
        <p>"{{ comment.commentText }}"</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Forum',
  data() {
    return {
        errors: {},
        newCommentValue: '',
        comments: []
    }
  },
  props: {
      token: '',
      currentEventID: ''
  },
    methods: {
        submitComment(newCommentValue) {
            this.$api_service.submitComment(this.token, this.currentEventID, this.newCommentValue)
        }
    }
}
</script>

<style scoped>
  textarea {
  resize: none;
  }
  .comment{
  border-style: solid;
  }
</style>
