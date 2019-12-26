export default {
    name: 'faqs',
    title: 'よくある質問',
    type: 'document',
    fields: [
      {
        name: 'question',
        title: '質問',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'answer',
        title: '答え',
        type: 'array',
        of: [{ type: 'block' }],
        validation: Rule => Rule.required()
      },
    ],
    preview: {
        select: {
          title: 'question',
        }
      }
}
