// find avg no, of tags per user

// way 1
[
    {
        $unwind: "$tags",
    },
    {
        $group: {
            _id: "$_id",
            userCount: {
                $sum: 1,
            },
        },
    },
    {
        $group: {
            _id: null,
            avgTags: {
                $avg: "$userCount",
            },
        },
    },
]

// way 2
[
    {
        $addFields: {
            numberOfTags: {
                $size: {
                    $ifNull: ["$tags", []],
                },
            },
        },
    },
    {
        $group: {
            _id: null,
            avgTags: {
                $avg: "$numberOfTags",
            },
        },
    }
]