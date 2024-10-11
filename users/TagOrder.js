// how many users have 'ad' as the 2nd thing in their list of tags
[
    {
        $match: {
            "tags.1": "ad",
        },
    },
    { $count: "noOfUsers" },
]