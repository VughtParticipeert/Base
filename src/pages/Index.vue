<template>
  <LayoutDefault>
      <Posts v-for="post in allPosts" :key="post.node.id"
      :title="post.node.title"
      :date="post.node.date"
      :typePost="post.node.typePost"
      :content="post.node.content"
      :theme="post.node.theme"
      :group="post.node.group"
      :linkPath="`${post.node.path}#main`"
      class="posts"
      />
  </LayoutDefault>
</template>

<page-query>
  query Posts{
    allPost {
      edges {
        node {
          id
          title
          path
          typePost
          title
          date
          theme
          typePost
          unanswered
          group
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
    data() {
      return {
        title: "",
        test: ""
      }
    },
    computed: {
      allPosts() {
        const data = this.$page.allPost.edges
        
        //Sort item by date - oldest first
        let allPosts = data
        allPosts.sort((a,b)=> {
          const dateA = new Date(a.node.date)
          const dateB = new Date(b.node.date)
          return dateB - dateA
        })

        allPosts.map(post=> {
          if(post.node.group === 'none') {
            post.node.group = "..."
          }
          return post
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
