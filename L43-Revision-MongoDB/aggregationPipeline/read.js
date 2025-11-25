// Find all products purchases by divyanshu
db.purchases.aggregate([
    {
        $match: {
            username: 'divyanshu'
        }
    }
])

// Find Sum of All Products for every user
db.purchases.aggregate([
    {
        $match: {
            dateOfPurchase: {
                $gte: '2025-02-19'
            }
        }
    },
    {
        $group: {
            _id: "$username",
            total: {
                $sum: {
                    $multiply: ["$price", "$quantity"]
                }
            }
        }
    },
    {
        $sort: {
            total: 1
        }
    }
])


db.purchases.aggregate([
    {
        $group: {
            _id: "$username",
            total: {
                $sum: {
                    $multiply: ["$price", "$quantity"]
                }
            }
        }
    },
    {
        $sort: {
            total: 1
        }
    }
])