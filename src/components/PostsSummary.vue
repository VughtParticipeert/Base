<template>
    <aside class="posts-summary-container">
        <p class="title">Alle posts</p>
        <div class="summary-container">
            <p class="summary"><span>Publicatie: </span><span class="count">0</span></p> 
            <p class="summary"><span>Vraag: </span><span class="count">6</span></p> 
            <p class="summary"><span>Herrinnering: </span><span class="count">18</span></p> 
            <p class="summary"><span>Antwoord: </span><span class="count">176</span></p> 
        </div>
    </aside>
</template>

<script>
export default {
    name: "PostsSummary"
}
</script>

<style lang="scss" scoped>
    .posts-summary-container {
        background-color: white;
        width: 20rem;
        border-radius: var(--small-radius);
        margin-top: 10.85rem;
        padding: 2rem;
        position: sticky;
        top: 5rem;

        .title {
            font-size: 2em;
            font-weight: bold;
            color: var(--primary-color);
        }

        .summary-container {
            margin-top: 1rem;

            .summary {
                display: flex;
                margin-top: 0.4rem;

                .count {
                    margin-left: auto;
                    color: var(--accent-color-one);
                }
            }
        }
    }
</style>