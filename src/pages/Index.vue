<template>
  <Layout>
    
    <section v-for="vraag in $page.vragen.edges" :key="vraag.id">
      <vraag
        :title="vraag.node.title"
        :image="vraag.node.featuredImage"
        :date="vraag.node.date"
        :content="vraag.node.content"
      />
    </section>
  </Layout>
</template>

<page-query>
  query Posts {
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
.home-links a {
  margin-right: 1rem;
}
</style>
