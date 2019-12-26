export default {
    name: 'galleryPage',
    title: 'ギャラリーページデータ',
    type: 'document',
    fields: [
        {
          title: 'ギャラリーイメージ',
          name: 'galleryImages',
          type: 'array',
          of: [{type: 'image'}],
          options: {
              hotspot: true
          }
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
        }
      }
}
