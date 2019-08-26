<template>
    <LayoutDefault
        :title = "title"
        :disableSummary = disableSummary
    >
    </LayoutDefault>
</template>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    export default {
        name: "About",
        components: {
            LayoutDefault
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