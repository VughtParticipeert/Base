<template>
    <aside class="posts-summary-container">
        <p class="title">Samenvatting vragen</p>
        <!-- <div class="summary-container">
            <section class="summary-child-container summary-question">
                <p class="summary"><span>Vragen gesteld: </span><span class="count">{{question.total}}</span></p> 
                <p class="summary"><span>Vragen onbeantwoord: </span><span class="count">{{question.totalUnanswered}}</span></p>                 
            </section>
            <section class="summary-child-container summary-answer">
                <p class="summary"><span>Antwoord is volledig: </span><span class="count">{{answerStatus.complete}}</span></p> 
                <p class="summary"><span>Antwoord is onvolledig: </span><span class="count">{{answerStatus.inComplete}}</span></p> 
                <p class="summary"><span>Antwoord volstaat niet: </span><span class="count">{{answerStatus.inSufficient}}</span></p> 
            </section>
        </div> -->
    </aside>
</template>


<script>
export default {
    name: "PostsSummary",
    // computed: {
    //     question() {
    //         const data = this.$static.question

    //         //count how many items are unanswered
    //         let countUnanswered = 0;
    //         this.$static.question.edges.forEach(element => {
    //             if(element.node.unanswered === true) {
    //                 countUnanswered++
    //             }
    //         })
    //         const question = {
    //             total: data.totalCount,
    //             totalUnanswered: countUnanswered
    //         }

    //         return question
    //     },
    //     answerStatus() {
    //         const data = this.$static.answer.edges
    //         let countComplete = 0
    //         let countIncomplete = 0
    //         let countInSufficient = 0
    //         const status = {
    //             complete: 1,
    //             inComplete: 2,
    //             inSufficient: 3
    //         }

    //         data.forEach(element => {
    //             const answerStatus = element.node.status
    //             if(answerStatus === status.complete) {
    //                 countComplete++
    //             }
    //             else if (answerStatus === status.inComplete) {
    //                 countIncomplete++
    //             }
    //             else if (answerStatus === status.inSufficient) {
    //                 countInSufficient++
    //             }
    //         })

    //         const answerTotalStatus = {
    //             complete: countComplete,
    //             inComplete: countIncomplete,
    //             inSufficient: countInSufficient
    //         }

    //         return answerTotalStatus
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .posts-summary-container {
        background-color: white;
        width: 20rem;
        border-radius: var(--small-radius);
        margin-top: 12.85rem;
        padding: 2rem;
        position: sticky;
        top: 5rem;

        .title {
            font-size: 2em;
            font-weight: bold;
            color: var(--primary-color);
        }

        .summary-container {
            margin-top: 2rem;

            .summary-child-container {
                margin-top: 1rem;
            }

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