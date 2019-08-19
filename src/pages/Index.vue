<template>
  <Layout>
    <main v-for="post in allPosts" :key="post.id" class="main-posts">
      <Posts
        :title="post.title"
        :date="post.date"
        :reason="post.reason"
        :content="post.content"
      />
    </main>
  </Layout>
</template>

<page-query>
  query Posts {
    allPosts {
      edges {
        node {
          id
          title
          date
          reason
          content
        }
      }
    }
  }
</page-query>


<script>
  import Posts from "@/components/Posts"
  export default {
    components: {
      Posts
    },
    computed: {
      allPosts() {
        const posts = this.$page.allPosts.edges
        const allPosts = posts.map(post => {
          return post.node
        })

        return allPosts
      }
    }
  }
</script>


<style>  
  .main-posts {
    display: flex;
    display: grid;
    justify-content: center;
    margin-top: 4rem;
    padding: 2rem;
  }
</style>
