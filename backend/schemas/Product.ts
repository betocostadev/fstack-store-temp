import { integer, select, text } from '@keystone-next/fields'
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
    status: select({
      options: [
        { label: ProductStatus.draftLabel, value: ProductStatus.draftValue },
        { label: ProductStatus.availableLabel, value: ProductStatus.unavailableValue },
        { label: ProductStatus.unavailableLabel, value: ProductStatus.availableValue },
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
})
