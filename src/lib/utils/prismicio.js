import * as prismic from '@prismicio/client'

const repositoryName = 'lose-your-head-the-client-case'

const createClient = (params) => {
    const client = prismic.createClient(repositoryName, params)

    return client
}

export default createClient