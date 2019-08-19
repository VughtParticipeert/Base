<template>
  <Layout>
    <section class="vragen-container">
      <vraag
        v-for="vraag in this.$page.vragen.edges" :key="vraag.id"
        :title="vraag.node.title"
        :image="vraag.node.featuredImage"
        :date="vraag.node.date"
        :content="vraag.node.content"
      />
    </section>
  </Layout>
</template>

<page-query>
  query allData {
    vragen: allContent{
      edges {
        node {
          id
          path
          title
          date
          content
          featuredImage
        }
      }
    }
  }
</page-query>


<script>
  import vraag from "@/templates/vraag"
  export default {
    components: {
      vraag
    },
    metaInfo: {
      title: 'Hello, world!'
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
