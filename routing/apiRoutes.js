var express = require("express");
var app = express();
require("../data/friends");

module.exports = function(app) {
app.get('/api/friends', (req,res) => {
    return res.json(friends);
})

app.post('/api/friends', (req,res) => {
    var newFriend = req.body;
    friends.push(newFriend);
    friendMatch(newFriend.name);
    let friendName = closestMatch.name;
    let friendPicture = closestMatch.photo
})
}