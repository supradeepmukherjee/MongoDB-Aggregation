// average age
[
  {
    $group: {
      _id: null,
      avgAge: {
        $avg: "$age",
      },
    },
  },
]