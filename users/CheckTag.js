// how many users have 'enim' as one of their tags
[
    {
        $match: {
            tags: "enim",
        },
    },
    {
        $count: "noOfUsers",
    },
]