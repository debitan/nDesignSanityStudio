export default {
    name: 'content',
    title: 'ページデータ',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish'
      ],
    fields: [
        {
            name: 'title',
            title: 'ページ名',
            type: 'string'
          },
        {
            title: 'トプイメージ',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'overlayText',
            title: 'イメージの言葉',
            type: 'blockContent'
          }
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
        }
      }
}
