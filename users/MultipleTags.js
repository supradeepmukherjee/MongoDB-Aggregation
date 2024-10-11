// find users who have both 'enim' & 'id' as their tags
[
    {
        $match: {
            tags: {
                $all: ["enim", "id"],
            },
        },
    },
]