<template>
    <article class="post-container">
        <section v-if="!disableMetaData" class="meta-data">            
            <p class="group-container"><span>groep: </span><span class="text group-text">{{group}}</span></p>
            <p class="theme-container"><span>thema: </span><span class="text theme-text">{{theme}}</span></p>
            <p class="reason-container"><span>type: </span><span class="text reason-text">{{typePost}}</span></p>
        </section>
        <g-link :to="linkPath" class="g-link">
            <h1 class="title">{{title}}</h1>
        </g-link>
        <p v-if="!disableMetaData" class="date-container"><span>Gepost op: </span><span>{{date | moment("DD-MM-YY")}}</span></p>
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
        },
        theme: {
            type: String
        },
        typePost: {
            type: String,
        },
        content: {
            required: true
        },
        group: {
            type: String,
        },
        linkPath: {
            type:String
        },
        disableMetaData: {
            type: Boolean,
            default: false
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
        margin-top: 2rem;
        display: grid;
        grid-template-areas: 
            "metaData"
            "title"
            "date"
            "content"
        ;

        .meta-data {
            display: flex;
            grid-area: metaData;
            font-size: 1.1em;
            background-color: rgb(252, 252, 252);
            color: rgb(114, 114, 114);

            .text {
                padding: 0.4rem 0.7rem;
                border-radius: 0.2rem;
                font-weight: medium;
            }

            .reason-container {
                margin-left: auto;

                .reason-text{
                    color: var(--accent-color-one);
                }
            }

            .group-container {
                margin-right: auto;

                .group-text {
                    color: var(--accent-color-three);
                }
            }

            .theme-container {
                .theme-text {
                    color: var(--accent-color-two);
                    text-transform: capitalize;

                    &::first-letter {
                        text-transform: capitalize;
                        color: red;
                    }
                }
            }
        }

        .g-link {
            text-decoration: none;
            color: black;

            &:hover .title {
                color: var(--secondary-color);
            }
        }

        .title {
            grid-area: "title";
            font-size: 2.2em;
            margin-top: 2rem;
            color: var(--primary-color);
            transition: all 0.4s ease-out;
        }

        .date-container {
            grid-area: date;
            display: flex;
            flex-wrap: wrap;
            color: #797979;
            margin-top: 0.4rem;

            span {
                margin-right: 0.7rem;
            }
        }

        .content {
            grid-area: content;
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
                    color: var(--secondary-color);
                    text-decoration: none;
                    // border-bottom: solid 0.09rem var(--primary-color);

                    &:after {
                        content: "";
                        position: absolute;
                        height: 0.1rem;
                        width: 100%;
                        bottom: 0;
                        left: -100%;
                        background-color: var(--secondary-color);
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