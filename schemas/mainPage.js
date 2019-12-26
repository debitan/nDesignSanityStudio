export default {
    name: 'mainPage',
    title: 'メインページデータ',
    type: 'document',
    fields: [
        {
          name: 'subheader',
          type: 'array',
          title: '小見出し',
          description: '例えば、送料の情報',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        },
        {
            title: 'トップイメージ',
            name: 'topImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'overlayText',
            title: 'イメージ上の言葉',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'introText',
            title: '紹介言葉',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'eventText',
            title: 'イベント・ウエディング紹介言葉',
            type: 'text'
        },
        {
            name: 'eventImage',
            title: 'イベントイメージ',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'weddingImage',
            title: 'ウエディングイメージ',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'topImage'
        }
      }
}
