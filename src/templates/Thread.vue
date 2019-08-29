<template>
    <LayoutDefault
      title = "Gerelateerde post"
    >
    <div class="button-container">
      <GoBack/>
    </div>
    <Posts
        v-for="post in this.$page.thread.posts" :key="post.id"
        :title="post.title"
        :date="post.date"
        :typePost="post.typePost"
        :content="post.content"
        :theme="post.theme"
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
            theme
            date
            typePost
            unanswered
            content:body
          }
        }
    }
</page-query>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import Posts from "@/components/Posts"
    import GoBack from "@/components/GoBack"

    export default {
        name: "Thread",
        components: {
            LayoutDefault,
            Posts,
            GoBack
        },
        computed: {
          threadTitle() {
            return this.$page.thread.title
          }
        }
    }
</script>

<style scoped lang="scss">
</style>

