export default {
  name: 'product',
  title: '商品',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '商品名',
      type: 'string'
    },
    {
      name: 'flower',
      title: 'flower',
      type: 'string'
    },
    {
      name: 'type',
      title: 'タイプ',
      type: 'string'
    },
    {
      name: 'colours',
      title: '色',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'slug',
      title: 'URL用英語名（スペースなし、”−”使用)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'images',
      title: 'イメージ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productDetails'
        }
      ]
    },
    {
      name: 'body',
      title: '商品説明',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    }
  }
}
