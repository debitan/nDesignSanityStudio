export default {
    name: 'seasonal',
    title: '季節のコンテンツ',
    type: 'document',
    fields: [
        {
            title: 'イメージ',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'イメージ上の言葉',
            name: 'overlayText',
            type: 'array',
            of: [{type: 'block'}]
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
        }
      }
}
