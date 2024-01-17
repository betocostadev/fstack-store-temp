import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/fstack-store-temp'

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 2, // How long to stay signed in
  secret: process.env.COOKIE_SECRET,
}

export default config({
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
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true,
  },
  // Add session values here
})
