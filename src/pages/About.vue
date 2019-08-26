<template>
    <LayoutDefault
        :title = "title"
        :disableSummary = disableSummary
    >
        <Posts
            v-for="post in this.$page.allAbout.edges" :key="post.node.id"
            :title="post.node.title"
            :content="post.node.content"
            :disableMetaData=true
        />
    </LayoutDefault>
</template>

<page-query>
    query About {
        allAbout {
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
</page-query>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import Posts from "@/components/Posts"

    export default {
        name: "About",
        components: {
            LayoutDefault,
            Posts
        },
        data() {
            return {
                title: "Over ons",
                disableSummary: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>