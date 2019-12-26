export default {
    name: 'informationPage',
    title: 'オーダー・配達の情報ページ',
    type: 'document',
    fields: [
      {
        name: 'information',
        title: '情報の言葉',
        type: 'array',
        of: [{ type: 'block' }]
      },
    ],
    preview: {
        select: {
          title: 'title',
        }
      }
}
