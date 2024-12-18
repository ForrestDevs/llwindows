declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      S3_BUCKET: string
      S3_ENDPOINT: string
      S3_ACCESS_KEY_ID: string
      S3_SECRET_ACCESS_KEY: string
      S3_REGION: string
      RESEND_API_KEY: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
