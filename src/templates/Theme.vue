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
				:group="post.node.group"
				:linkPath="post.node.path"
		/>
    </LayoutDefault>
</template>

<page-query>
    query Theme ($id: String!){
			theme(id: $id) {
				themeName
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
				filteredPost() {
					const filterArgument = this.themeTitle

					const allPosts = this.$page.allPost.edges
					const filterPost = allPosts.filter(post => {
						return post.node.theme === filterArgument
					})

					filterPost.sort((a, b) => {
						const dateA = new Date(a.node.date)
						const dateB = new Date(b.node.date)
						return dateB - dateA
					})

					filterPost.map(post => {
						if (post.node.group === 'none') {
							post.node.group = "..."
						}
						return post
					})
					
					return filterPost
				}
			},
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