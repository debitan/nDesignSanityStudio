export default {
  name: 'siteSettings',
  type: 'document',
  title: 'サイト設定',
  __experimental_actions: [
    'create',
    'update',
    'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'hero',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Hero',
      description: 'This content will appear on the hero on the index page'
    },
    {
      name: 'about',
      type: 'projectPortableText',
      title: 'About',
      description: 'This content will appear on the about page'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
  ]
}
