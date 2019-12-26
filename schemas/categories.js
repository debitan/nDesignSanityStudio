export default {
    name: 'categories',
    title: '商品タイプ',
    type: 'document',
    fields: [
      {
        name: 'jpCategory',
        title: '商品タイプ（日本語）',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'enCategory',
        title: '商品タイプ（英語）',
        type: 'string',
        validation: Rule => Rule.required()
      },
    ],
    preview: {
        select: {
          title: 'jpCategory',
        }
      }
}
