<template>
  <div class="forum">
    <div class="comment-form">
      <textarea v-model="newCommentValue" draggable="false" rows="4" cols="50">
      </textarea>
      <button v-on:click="submitComment">Submit Comment</button>
    </div>
    <div class="comment-list" v-for="comment in comments">
      <div class="comment">
        <h3>{{ comment.username }} says:</h3>
        <p>"{{ comment.content }}"</p>
        <p>Posted at: {{ comment.date }}</p>
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
        submitComment() {
            this.$api_service.submitComment(this.token, this.currentEventID, this.newCommentValue)
                .then((res) => {
                    this.getComments()
                })
        },
        getComments() {
            this.$api_service.getComments(this.currentEventID).then(res => {
                this.comments = res
            })
        }
    },
    beforeMount() {
        this.getComments()
    }
}
</script>

<style scoped>
  textarea {
  resize: none;
  }
  .comment{
      border-style: solid;
      border-width: 1px;
      margin: 2px;
      padding: 4px;
  }
</style>
