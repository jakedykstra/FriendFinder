var express = require("express");
var app = express();
var data = require("../data/friends");
// console.log(data);
// console.log(data.friends);

module.exports = function(app) {
app.get('/api/friends', (req,res) => {
    return res.json(friends);
})

app.post('/api/friends', (req,res) => {
    // console.log(req.body);
    // console.log(data.friends);
    req.body.scores = req.body.scores.map(val => Number(val))
    var newFriend = req.body;
    data.friends.push(newFriend);
    var closestMatch = data.friendMatch(newFriend, data.friends);
    res(data.jsonForModal(closestMatch))
    // let friendName = closestMatch.name;
    // let friendPicture = closestMatch.photo
})
}