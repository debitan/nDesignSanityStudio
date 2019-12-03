export default {
    name: 'content',
    title: 'Content',
    type: 'document',
    __experimental_actions: [
        // 'create',
        'update',
        // 'delete',
        'publish'
      ],
    fields: [
        {
            title: 'Hero text',
            name: 'text',
            type: 'simplePortableText'
        },
        {
            title: 'Hero image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {
          title: 'title',
        }
      }
}