const blogSchema = {
    name: "blog",
    type: "document",
    title: 'Blog',
    fields: [
        {
            name: 'Title',
            type: 'string',
            title: 'Title page blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug of your blog article',
            options: {
                source: 'Title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
};

export default blogSchema;