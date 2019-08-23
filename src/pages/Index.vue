<template>
  <LayoutDefault>
    <main class="main-posts">
      <h1 class="title">Actuele thema's</h1>
      <Posts
        v-for="post in allPosts" :key="post.id"
        :title="post.title"
        :date="post.date"
        :typePost="post.typePost"
        :content="post.content"
        class="posts"
      />
    </main>
  </LayoutDefault>
</template>

<page-query>
  query Posts{
    allThread{
      edges {
        node {
          id
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
    computed: {
      allPosts() {//Get all post from all threads
        const data = this.$page.allThread.edges
        let allPosts = []

        data.forEach(item => {
          const threadId = item.node.id
          const posts = item.node.posts
          posts.forEach(post => {
            post.id = this.createUniqueId() // add unique id to object
            post.threadId = threadId //Add foreign key to the parent id
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
        const array = new Uint32Array(1);
        const randomNumber =  window.crypto.getRandomValues(array);
        const id = `id_${randomNumber[0]}`
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

    .posts {
      margin-top: 2rem;
    }
  }
</style>
