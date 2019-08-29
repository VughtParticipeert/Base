<template>
    <LayoutDefault
      title = "Post"
    >
    <div class="button-container">
      <GoBack/>
    </div>

    <Posts
        :title="this.$page.post.title"
        :date="this.$page.post.date"
        :typePost="this.$page.post.typePost"
        :content="this.$page.post.content"
        :theme="this.$page.post.theme"
        class="active"
    />

    <span v-if="filteredPost.length > 0" class="description">Gerelateerde posts</span>
    <span v-else class="description">Deze post heeft geen gerelateerde post</span>

    <div v-if="filteredPost">
			<Posts
					v-for="post in filteredPost"
					:key="post.node.id"
					:title="post.node.title"
					:date="post.node.date"
					:typePost="post.node.typePost"
					:content="post.node.content"
					:theme="post.node.theme"
			/>
    </div>

    </LayoutDefault>
</template>

<page-query>
	query Post ($id: String!) {
			post(id: $id) {
					id
					title
					typePost
					title
					theme
					date
					typePost
					group
					content
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
        name: "Post",
        components: {
            LayoutDefault,
            Posts,
            GoBack
        },
        computed: {
          threadTitle() {
            return ""
          },
          filteredPost() {
							const filterArgument = this.$page.post.group
							const postId = this.$page.post.id
              if(filterArgument !== "none") {
                  const allPosts = this.$page.allPost.edges
                  const filterPost = allPosts.filter(post => {
                      return post.node.group === filterArgument && post.node.id !== postId
                  })
									return filterPost
              }else {
                  return false
              }
          }
        }
    }
</script>

<style scoped lang="scss">
    .active {
        box-shadow: var(--material-shadow-hover);
    }
    .description {
        color: #bdbdbd;
        font-size: 2em;
        margin: 4rem 0 1rem 0;
    }
</style>

