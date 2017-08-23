const ObjectId = require('mongodb').ObjectId; 
let Robots = {
    directory: (req, res) => {
        let users = res.db.collection('users');
        users.find({}).toArray((err, docs) => {
            if (err !== null) {res.send('Failed to locate data')}
            else {res.render('directory', {'users': docs})};
        })
        res.db.close();
    },
    user: (req, res) => {
        let users = res.db.collection('users');
        users.findOne({_id: ObjectId(req.params.user)}, (err, docs) => {
            console.log(docs)
            if (err !== null) {res.send('Failed to find user')}
            else {res.render('profile', docs)}
            res.db.close();
        })
    } 
}
module.exports=Robots