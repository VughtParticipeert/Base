<template>
    <LayoutDefault
      :title = "threadTitle"
    >
    <div class="button-container">
      <g-link class="back-button" to="/">terug</g-link>
    </div>
    <Posts
        v-for="post in this.$page.thread.posts" :key="post.id"
        :title="post.title"
        :date="post.date"
        :typePost="post.typePost"
        :content="post.content"
        :thread="threadTitle"
    />
    </LayoutDefault>
</template>

<page-query>
    query Thread ($id: String!) {
        thread(id: $id) {
            title
            posts{
            typePost
            title
            date
            typePost
            unanswered
            status
            content:body
          }
        }
    }
</page-query>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import Posts from "@/components/Posts"

    export default {
        name: "Thread",
        components: {
            LayoutDefault,
            Posts
        },
        computed: {
          threadTitle() {
            return this.$route.params.title
          }
        }
    }
</script>

<style scoped lang="scss">
  .button-container {

    .back-button {
      margin: 1rem 0;
      padding: 1rem;
      border-radius: var(--small-radius);
      background-color: var(--secondary-color);
      display: inline-flex;
      text-decoration: none;
      color: white;
      box-shadow: var(--material-shadow-one);
      transition: all 0.4s ease-out;

      &:hover {
        box-shadow: var(--material-shadow-hover);
      }
    }
  }
</style>

