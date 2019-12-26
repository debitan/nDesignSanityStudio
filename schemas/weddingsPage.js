export default {
    name: 'weddingsPage',
    title: 'イベントページデータ',
    type: 'document',
    fields: [
        {
            title: 'トプイメージ',
            name: 'topImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'イメージの言葉',
            name: 'overlayText',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: 'ウエディングについて言葉',
            name: 'bodyText',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
          title: 'ウエディングイメージ',
          name: 'weddingsImage',
          type: 'array',
          of: [{type: 'image'}],
          options: {
              hotspot: true
          }
        },
        {
            title: 'お問い合わせの感謝言葉',
            name: 'contactText',
            type: 'array',
            of: [{type: 'block'}]
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'topImage'
        }
      }
}
