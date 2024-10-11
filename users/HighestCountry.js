// country which has highest number of registered users
[
    {
        $group: {
            _id: "$company.location.country",
            userCount: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            userCount: -1,
        },
    },
    { $limit: 1 }
]