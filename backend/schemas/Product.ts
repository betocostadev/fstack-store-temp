import { integer, relationship, select, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'
import { ProductStatus } from '../types/Statuses'

export const Product = list({
  // TODO
  // access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: ProductStatus.draftLabel, value: ProductStatus.draftValue },
        { label: ProductStatus.availableLabel, value: ProductStatus.availableValue },
        { label: ProductStatus.unavailableLabel, value: ProductStatus.unavailableValue },
      ],
      defaultValue: ProductStatus.draftValue,
      isRequired: true,
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    // TODO: Photo - Relationship
  },
  ui: {
    listView: {
      initialColumns: ['name', 'status', 'price'],
    },
  },
})
