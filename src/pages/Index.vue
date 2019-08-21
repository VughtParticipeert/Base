<template>
  <LayoutDefault>
    <main class="main-posts">
      <h1 class="title">Actuele thema's</h1>
      <Posts
        v-for="post in allPosts" :key="post.id"
        :title="post.title"
        :date="post.date"
        :reason="post.reason"
        :content="post.content"
        class="posts"
      />
    </main>
  </LayoutDefault>
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
  import LayoutDefault from "@/layouts/LayoutDefault.vue"
  export default {
    components: {
      Posts,
      LayoutDefault
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
