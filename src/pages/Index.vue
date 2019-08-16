<template>
  <Layout>
    <section class="vragen-container">
      <vraag
        v-for="vraag in $page.vragen.edges" :key="vraag.id"
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

    allLogo {
      edges {
        node {
          title
          logoUrl: logo
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
  height: 100%;
}

.home-links a {
  margin-right: 1rem;
}
</style>
