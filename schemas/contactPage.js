export default {
    name: 'contactPage',
    title: 'お問い合わせページ',
    type: 'document',
    fields: [
      {
        name: 'information',
        title: 'お問い合わせ情報',
        type: 'array',
        of: [{ type: 'block' }]
      },
    ],
    preview: {
        select: {
          title: 'information',
        }
      }
}
