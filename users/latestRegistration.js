// who has registered the most recently
[
    {
        $sort: {
            registered: -1,
        },
    },
    {
        $limit: 1,
    },
]