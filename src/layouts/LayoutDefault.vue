<template>
  <div class="layout">
    <div class="header">
      <Header/>
    </div>
    <div class="post-summary">
      <PostsSummary/>
    </div>
    <div class="newsletter">
      <Newsletter/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/Header'
import PostsSummary from '@/components/PostsSummary'
import Newsletter from '@/components/Newsletter'


export default {
  name: "LayoutDefault",
  components: {
    Header,
    PostsSummary,
    Newsletter
  }
}
</script>

<style scoped lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 
      "header header header"
      "summary main newsletter";
    justify-items: center;

    .header {
      grid-area: header;
    }

    .posts-summary {
      grid-area: summary;
    }

    .newsletter {
      grid-area: newsletter;
    }
  } 
</style>
