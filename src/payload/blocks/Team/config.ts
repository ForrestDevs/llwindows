import type { Block } from 'payload'
import { TEAM_BLOCK_SLUG } from '../constants'

export const TeamBlock: Block = {
  slug: TEAM_BLOCK_SLUG,
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'members',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Profile Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bio',
          type: 'richText',
          label: 'Biography',
          required: true,
        }
      ]
    }
  ]
}

export default TeamBlock
