// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import product from './product'
import productVariant from './productVariant'
import mainPage from './mainPage'
import eventsPage from './eventsPage'
import weddingsPage from './weddingsPage'
import seasonal from './seasonal'
import galleryPage from './galleryPage'
import contactPage from './contactPage'
import confirmationPage from './confirmationPage'
import informationPage from './informationPage'
import categories from './categories'
import faqs from './faqs'
import siteSettings from './siteSettings'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

import simplePortableText from './objects/simplePortableText'
import projectPortableText from './objects/projectPortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    mainPage,
    eventsPage,
    weddingsPage,
    seasonal,
    galleryPage,
    contactPage,
    confirmationPage,
    informationPage,
    categories,
    faqs,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    //objects
    simplePortableText,
    projectPortableText
  ])
})
