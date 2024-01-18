import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'
import { User } from './schemas/User'
import { createAuth } from '@keystone-next/auth'
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/fstack-store'

const oneWeek = 60 * 60 * 24 * 7

const sessionConfig = {
  maxAge: oneWeek, // How long to stay signed in
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles here
  },
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // ADD Data seeding here
    },
    lists: createSchema({
      // Schema items go here
      User,
    }),
    ui: {
      // TODO: Change this for roles
      isAccessAllowed: ({ session }) => {
        // console.log(session)
        return !!session?.data
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id email`,
    }),
  })
)
