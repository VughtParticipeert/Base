<template>
    <LayoutDefault
      :title = "themeTitle"
    >
		<div class="button-container">
      <GoBack/>
    </div>
		<Posts
				v-for="post in this.filteredPost" :key="post.node.id"
				:title="post.node.title"
				:date="post.node.date"
				:typePost="post.node.typePost"
				:content="post.node.content"
				:theme="post.node.theme"
				:thread="post.node.threadTitle"
				:linkPath="post.node.path"
		/>
    </LayoutDefault>
</template>

<page-query>
    query Theme ($id: String!){
			theme(id: $id) {
				themeName
			}

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
                    }
                }
            }
        }
			
			allPost {
				edges {
					node {
						id
						title
						path
						typePost
						title
						date
						theme
						typePost
						unanswered
						content
						group
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
            return this.$page.theme.themeName
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

						const allPosts = this.$page.allPost.edges
						const filterPost = allPosts.filter(post => {
							return post.node.theme === filterArgument
						})
						return filterPost
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
</style>