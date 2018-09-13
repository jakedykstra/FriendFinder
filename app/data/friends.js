// stored data of friends survey answers
exports.friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}, {
    "name": "John",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        4,
        3,
        2,
        4,
        5,
        4,
        2,
        1,
        4,
        2
    ]
}]


// functionality for testing new friend and comparing to best matched in db

exports.friendMatch = (newFriend, friends) => {
    // creating reducer functionality where we will add all scores together
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // array that will hold overallScores
    var overallScore = [];
    var newFriendIndex, friendScore;
    console.log(friends);
    // console.log(newFriend);
    // looping through friends object and making an array of the overall scores
    for (i = 0; i < friends.length; i++) {
        // reducing the scores to one overall and then storing that score in the overallScore array to compare to the newFriend score
        let score = friends[i].scores;
        score = score.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        console.log("------------------");
        console.log(score);
        console.log("------------------");
        overallScore.push(score);
        // creating index searching method with find index so we can compare scores without friends names

        // finding the index of the newfriend and then using that to get their overallscore for comparing
        if (friends[i]["name"] == newFriend.name) {
            newFriendIndex = i;
            friendScore = overallScore[i];
        }

    };

    console.log(overallScore);

    // looping through the overallScore index and testing against the friends score. Resulting in finding the closest index
    var closest, closestIndex, newCompare, closestMatch;

    for (i = 0; i < overallScore.length; i++) {
        // if it's the index we're testing against continue
        if (i == newFriendIndex) {
            continue;
            // if closest variable doesn't exist (this is the first index), make the closest variable and make this the closest score at this point
        } else if (closest == undefined) {
            closest = friendScore - overallScore[i];
            closestIndex = i;
            // if this score is lower than the current closest, make this the closest
        } else {
            newCompare = friendScore - overallScore[i];
            // making it a positive for comparing
            newCompare = Math.abs(newCompare);

            // comparing against last closest
            if (newCompare < closest) {
                closet = newCompare;
                closestIndex = i;
            } 
        }
        // returning the function with closestMatch
        closestMatch = friends[closestIndex];

    }
    return closestMatch;
}

exports.jsonForModal = (closestMatch) => {
    let similarFriend = {
        friendName: closestMatch.name,
        friendPicture: closestMatch.photo
    }
    // return similar Friend object
    console.log("Similar friend ----------------");
    console.log(similarFriend);
    return similarFriend;
}

// 6. Determine the user's most compatible friend using the following as a guide:

// * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
// * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//   * Example: 
//     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//     * Total Difference: **2 + 1 + 2 =** **_5_**
// * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
// * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// * The modal should display both the name and picture of the closest match.