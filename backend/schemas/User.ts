import { text, password, relationship, select } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'
import { UserStatus } from '../types/Statuses'

export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // Custom fields
    status: select({
      options: [
        { label: UserStatus.activeLabel, value: UserStatus.activeValue },
        { label: UserStatus.inactiveLabel, value: UserStatus.inactiveValue },
        { label: UserStatus.removedLabel, value: UserStatus.removedValue },
      ],
      defaultValue: UserStatus.inactiveValue,
      isRequired: true,
      ui: {
        displayMode: 'select',
      },
    }),
    // TODO: Add roles, cart, orders
  },
})
