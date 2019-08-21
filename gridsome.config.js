// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Vught',
  siteUrl: 'https://vught.netlify.com',
  siteDescription: '',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      slug: true
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Content'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Logo/*.md',
        typeName: 'Logo'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Menu/*.md',
        typeName: 'Menu'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Jumbotron/*.md',
        typeName: 'Jumbotron'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Post/*/*.md',
        typeName: 'Posts'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Post/Publication/*.md',
        typeName: 'PostPublication'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/Post/Question/*.md',
        typeName: 'PostQuestion'
      }
    },
  ]
}
