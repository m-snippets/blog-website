import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion :'v2024-09-24',
    dataset: 'production',
    projectId: 'lnevvsp1',
    useCdn: false,
})