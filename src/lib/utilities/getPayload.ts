'use server'

import { getPayload as getPayloadBase } from 'payload'
import configPromise from '@payload-config'

const getPayload = () => getPayloadBase({ config: configPromise })

export default getPayload
