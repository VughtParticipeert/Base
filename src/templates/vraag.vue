<template>
    <section>
        <h2>{{title}}</h2>
        <img :src="image" alt="">
        <span>{{date}}</span>
        <p>{{content}}</p>
    </section>
</template>

<script>
export default {
    name: "vraag",
    props: {
        title: String,
        image: String,
        date: String,
        content: String
    }
}
</script>

<style>

</style>
