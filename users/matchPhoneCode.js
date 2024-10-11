// how many users have a phone no. starting with '+1 (940)'
[
    {
        $match: {
            'company.phone': /^\+1 \(940\)/ // regex using ai
        },
    },
    {
        $count: 'noOfUsers'
    }
]