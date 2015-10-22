db.Elements.runCommand("aggregate", {
    pipeline: [
        {   // find docs that contain Par*
            $match: { "Elements.Parents" : { "$regex" : "ArticleHeader" , "$options" : "i"}},
        },
        {   // create a doc with a single array elemm for each indexToken entry
            $unwind: "$Elements.Parents" 
        },
        {   // now throw out any unwind's that DON'T contain Par*
            $match: { "Elements.Parents": { "$regex": "ArticleHeader", "$options": "i" } },
        },
        {   // now produce the list of index tokens
            $group: {
                _id: "$Elements.Title",
                parents: { $push: "$Elements.Parents" },
            },
        },
    ],
})