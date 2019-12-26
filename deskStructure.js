import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('コンテンツ')
    .items([
        S.listItem()
            .title('Settings')
            .child(
                S.editor()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .id('siteSettings')
        ),
      　S.listItem()
            .title('Pages')
            .child(
                S.list()
                    .title('ページデータ')
                    .items([
                        S.listItem()
                            .title('Main page')
                            .child(
                                S.editor()
                                    .schemaType('mainPage')
                                    .documentId('mainPage')
                                    .id('mainPage')
                            ),
                        S.listItem()
                            .title('Events page')
                            .child(
                                S.editor()
                                    .schemaType('eventsPage')
                                    .documentId('eventsPage')
                                    .id('eventsPage')
                            ),
                        S.listItem()
                            .title('Weddings page')
                            .child(
                                S.editor()
                                    .schemaType('weddingsPage')
                                    .documentId('weddingsPage')
                                    .id('weddingsPage')
                            ),
                        S.listItem()
                            .title('Gallery page')
                            .child(
                                S.editor()
                                    .schemaType('galleryPage')
                                    .documentId('galleryPage')
                                    .id('galleryPage')
                            ),
                        S.listItem()
                            .title('Contact page')
                            .child(
                                S.editor()
                                    .schemaType('contactPage')
                                    .documentId('contactPage')
                                    .id('contactPage')
                            ),
                        S.listItem()
                            .title('Order confirmation page')
                            .child(
                                S.editor()
                                    .schemaType('confirmationPage')
                                    .documentId('confirmationPage')
                                    .id('confirmationPage')
                            ),
                        S.listItem()
                            .title('Information page')
                            .child(
                                S.editor()
                                    .schemaType('informationPage')
                                    .documentId('informationPage')
                                    .id('informationPage')
                            ),
                    ])
            ),
        S.listItem()
        .title('Seasonal')
        .child(
            S.editor()
                .schemaType('seasonal')
                .documentId('seasonal')
                .id('seasonal')
        ),
        ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'mainPage', 'eventsPage', 'weddingsPage', 'seasonal', 'galleryPage', 'contactPage', 'confirmationPage', 'informationPage'].includes(listItem.getId()))
    ])
