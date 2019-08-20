<template>
    <article class="post-container">
        <section class="meta-data">
            <p class="date-container"><span>Gepost op:</span><span>{{date}}</span></p>
            <p class="reason-container"><span class="reason-text">{{reason}}</span></p>
        </section>
        <h1 class="title">{{title}}</h1>
        <section v-html="content" class="content"></section>
    </article>
</template>


<script>
export default {
    name: "Posts",
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    .post-container {
        max-width: 50rem;
        background-color: white;
        padding: 2rem;
        border-radius: 0.2rem;

        .meta-data {
            display: flex;

            .date-container {
                display: flex;
                flex-wrap: wrap;
                color: #797979;
            }

            .reason-container {
                margin-left: auto;

                .reason-text{
                    font-weight: bold;
                    color: white;
                    background-color: #f5ac43;
                    background-color: var(--accent-color-one);
                    padding: 0.4rem;
                    border-radius: 0.2rem;
                }
            }
        }

        .title {
            font-size: 2.2em;
            margin-top: 2rem;
        }

        .content {
            margin-top: 2rem;
            line-height: 1.4;

            &::v-deep {
                p {
                    margin-top: 1rem;
                }

                h1, h2 {
                    margin-top: 3rem;
                }

                h1 {
                    font-size: 1.7em;
                }

                h2 {
                    font-size: 1.5em;
                }

                img {
                max-width: 100%;
                max-height: 20rem;
                object-fit: contain;
                border-radius: 0.2rem;
                border: solid 0.07rem rgb(195, 195, 241);
                }

                ul, ol {
                    list-style-position: inside;
                }

                a { 
                    display: inline-flex;
                    overflow: hidden;
                    position: relative;
                    color: var(--primary-color);
                    text-decoration: none;
                    // border-bottom: solid 0.09rem var(--primary-color);

                    &:after {
                        content: "";
                        position: absolute;
                        height: 0.1rem;
                        width: 100%;
                        bottom: 0;
                        left: -100%;
                        background-color: var(--primary-color);
                        transition: all 0.2s ease-out;
                    }

                    &:hover:after {
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
</style>