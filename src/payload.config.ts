import { mongooseAdapter } from '@payloadcms/db-mongodb'
import sharp from 'sharp'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from '@/payload/collections/Users'
import { plugins } from './payload/plugins'
import { defaultLexical } from '@/payload/fields/defaultLexical'
import { globals } from './payload/globals'
import { collections } from './payload/collections'
import { resendAdapter } from '@payloadcms/email-resend'
import { adminConfig } from './payload/admin/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  ...adminConfig,
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  email: resendAdapter({
    defaultFromAddress: 'llwindowsinc-noreply@gmail.com',
    defaultFromName: 'Admin',
    apiKey: process.env.RESEND_API_KEY,
  }),
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  globals,
  collections,
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
