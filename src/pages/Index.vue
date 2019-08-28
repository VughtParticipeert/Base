<template>
  <LayoutDefault>
      <Posts v-for="post in allPosts" :key="post.id"
      :title="post.title"
      :date="post.date"
      :typePost="post.typePost"
      :content="post.content"
      :theme="post.theme"
      :thread="post.threadTitle"
      :linkPath="`${post.path}#main`"
      class="posts"
      />
  </LayoutDefault>
</template>

<page-query>
  query Posts{
    allThread{
      edges {
        node {
          id
          title
          path
          posts{
            typePost
            title
            date
            theme
            typePost
            unanswered
            status
            content:body
          }
        }
      }
    }
  }
</page-query>


<script>
  import Posts from "@/components/Posts"
  import LayoutDefault from "@/layouts/LayoutDefault.vue"

  export default {
    components: {
      Posts,
      LayoutDefault
    },
    data() {
      return {
        title: "",
        test: ""
      }
    },
    computed: {
      allPosts() {//Get all post from all threads
        const data = this.$page.allThread.edges
        let allPosts = []

        data.forEach(item => {
          const threadId = item.node.id
          const threadTitle = item.node.title
          const path = item.node.path
          const posts = item.node.posts
          posts.forEach(post => {
            post.id = this.createUniqueId() // add unique id to object
            post.threadId = threadId //Add foreign key to the parent id
            post.threadTitle = threadTitle
            post.path = path
            allPosts.push(post)
          })
        })

        //Sort item by date - oldest first
        allPosts.sort((a,b)=> {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          return dateB - dateA
        })

        return allPosts
      }
    },
    methods: {
      createUniqueId() {
        const randomNumber =  Math.floor(Math.random() * Math.floor(1000000000));
        const id = `id_${randomNumber}`
        return id
      }
    }
  }
</script>


<style scoped lang="scss">
  $breakpoint-medium: 40em;

  .main-posts {
    display: flex;
    display: grid;
    justify-content: center;
    margin-top: 4rem;
    padding: 0.7rem;
    padding-top: 0;
    @media screen and (min-width: $breakpoint-medium) {
      & {
        padding: 2rem;
      }
    }

    .title {
      color: rgb(189, 189, 189);
      font-size: 4em;
    }
  }
</style>
