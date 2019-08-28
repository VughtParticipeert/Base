<template>
    <LayoutDefault
      :title = "themeTitle"
    >

		<g-link v-for="post in this.filteredPost" :key="post.id" :to="post.path" class="g-link">
			<Posts
					:title="post.title"
					:date="post.date"
					:typePost="post.typePost"
					:content="post.content"
					:theme="post.theme"
					:thread="post.threadTitle"
			/>
		</g-link>
    </LayoutDefault>
</template>

<page-query>
    query Theme {
        allThread {
            edges {
                node {
                    id
                    title
                    path
                    posts {
                        typePost
                        title
                        date
                        theme
                        typePost
                        unanswered
                        status
                        content: body
                    }
                }
            }
        }
    }
</page-query>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
		import Posts from "@/components/Posts"
		import GoBack from "@/components/GoBack"

    export default {
        name: "Theme",
        components: {
            LayoutDefault,
						Posts,
						GoBack
        },
        computed: {
          themeTitle() {
            const theme = this.$route.params.themeName
            const title = theme.replace("-", " ") //remove unnecessary characters
            return title
          },
					allPosts() { //Get all post from all threads
							const data = this.$page.allThread.edges
							let allPosts = []

							data.forEach(item => {
									const threadId = item.node.id
									const threadTitle = item.node.title
									const path = item.node.path
									const posts = item.node.posts
									posts.forEach(post => {
										post.id = this.createUniqueId() // add unique id to object
										post.threadId = threadId //Add foreign key to the parent id
										post.threadTitle = threadTitle
										post.path = path
										allPosts.push(post)
									})
							})

							//Sort item by date - oldest first
							allPosts.sort((a, b) => {
									const dateA = new Date(a.date)
									const dateB = new Date(b.date)
									return dateB - dateA
							})

							return allPosts
					},
					filteredPost() {
						const filterArgument = this.themeTitle

						let filteredPost = this.allPosts.filter(post => {
							return post.theme.toLowerCase() === filterArgument.toLowerCase()
						})

						return filteredPost
					}
				},
				methods: {
					createUniqueId() {
						const randomNumber = Math.floor(Math.random() * Math.floor(1000000000));
						const id = `id_${randomNumber}`
						return id
					}
				}
    }
</script>

<style scoped lang="scss">
  .button-container {

    .back-button {
      margin: 1rem 0;
      padding: 1rem;
      border-radius: var(--small-radius);
      background-color: var(--secondary-color);
      display: inline-flex;
      text-decoration: none;
      color: white;
      box-shadow: var(--material-shadow-one);
      transition: all 0.4s ease-out;

      &:hover {
        box-shadow: var(--material-shadow-hover);
      }
    }
	}
	
	.g-link {
		text-decoration: none;
		color: black;

		.posts {
			transition: all 0.4s ease-out;
		}

		&:hover .posts {
			box-shadow: var(--material-shadow-hover);
		}
	}
</style>