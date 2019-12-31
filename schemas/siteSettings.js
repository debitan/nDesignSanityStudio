export default {
  name: 'siteSettings',
  type: 'document',
  title: 'サイト設定',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'このサイトについての言葉',
      description: 'SMSとSEOの為'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'キーワード',
      description: 'SEOの為',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
  ]
}
