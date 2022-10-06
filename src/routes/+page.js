import { error } from '@sveltejs/kit'

import createClient from '$lib/utils/prismicio'

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })
    const documents = await client.getByUID('story', 'detail')

    if (documents) {
        return { 
          documents
        }
    }

    error(404, 'Not found')
}