<template>
    <section class="card">
        <h2 class="title">{{title}}</h2>
        <img class="image" :src="image" alt="">
        <span class="date">{{date}}</span>
        <p class="content">{{content}}</p>
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
.card {
    margin-bottom: 2rem;
}

.image {
    height: 4rem;
    width: 4rem;
    object-fit: contain;
}

.date {
    display: block;
}

.content {
    display: block;
}
</style>
