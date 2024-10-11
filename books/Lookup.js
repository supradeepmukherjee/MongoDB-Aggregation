[
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "_id",
            as: "desi",
        },
    },
    {
        $addFields: {
            desiObject: {
                $first: "$desi",
            },
        },
    },
]

[
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "_id",
            as: "desi",
        },
    },
    {
        $addFields: {
            desiObject: {
                $arrayElemAt: ["$desi", 0],
            },
        },
    }
]