import { Config } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { Users } from '@/payload/collections/Users'

type AdminConfig = Partial<Pick<Config, 'admin'>>

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const adminConfig: AdminConfig = {
  admin: {
    components: {
      graphics: {
        Logo: {
          path: '@/payload/admin/components/logo',
        },
        Icon: {
          path: '@/payload/admin/components/icon',
        },
      },
    },
    meta: {
      titleSuffix: ' | L&L Admin',
      icons: [
        {
          url: '/assets/favicon.ico',
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
}
