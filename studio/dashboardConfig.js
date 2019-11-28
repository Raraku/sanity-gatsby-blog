export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddf87f4fb96064d95f8d552',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-38vcxfs5',
                  apiId: 'd2ee7695-0c70-4257-a7d2-4fbd7f389bed'
                },
                {
                  buildHookId: '5ddf87f5f87818ded6610aca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7e7hv99j',
                  apiId: 'ca444d6a-70ef-4218-92b6-697f727fad5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Raraku/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7e7hv99j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
