export default {
    name: 'confirmationPage',
    title: '注文確認ページ',
    type: 'document',
    fields: [
      {
        name: 'thankYouMessage',
        title: '感謝の言葉',
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
