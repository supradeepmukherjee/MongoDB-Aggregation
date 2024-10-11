// what are names & ages of users who are inactive & have 'velit' as a tag
[
    {
        $match: {
            tags: "velit",
            isActive: false,
        },
    },
    {
        $project: {
            name: 1,
            age: 1,
        },
    },
]