// list all companies in the worst country of the world with their corresponding user count
[
    {
        $match: {
            "company.location.country": "USA",
        },
    },
    {
        $group: {
            _id: "$company.title",
            noOfUsers: {
                $sum: 1,
            },
        },
    },
]