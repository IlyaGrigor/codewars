// You have a group chat application, but who is online!?
//
//     You want to show your users which of their friends are online and available to chat!
//
//     Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
//
//     If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//
//     The input data has the following structure:

const friends = [{
    username: 'David', status: 'offline', lastActivity: 10
}, {
    username: 'Lucy', status: 'offline', lastActivity: 22
}, {
    username: 'Bob', status: 'offline', lastActivity: 104
}]

// The corresponding output should look as follows:

// {
//     online: ['David'],
//         offline: ['Lucy'],
//     away: ['Bob']
// }

// If for example, no users are online the output should look as follows:

// {
//     offline: ['Lucy'],
//         away: ['Bob']
// }

// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
//
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// const whosOnline = (friends) => {
//     const friendsStatus = {
//         online: [],
//         offline: [],
//         away: []
//     };
//     for (let i = 0; i < friends.length; i++) {
//         friends[i].status === "online" ?
//             friendsStatus.online.push(friends[i].username) :
//             (friends[i].lastActivity > 10) ?
//                 friendsStatus.away.push(friends[i].username) :
//                 friendsStatus.offline.push(friends[i].username);
//     }
//     return friendsStatus;
// }
//
// const result = whosOnline(friends)
// console.log(result);

const whosOnline = (friendsObject) => {
    return friendsObject.reduce((friendStatusArr, friend) => {
        let key;
        if (friend.status === "online" && friend.lastActivity <= 10) {
            key = "online";
        } else if (friend.status === "online" && friend.lastActivity > 10) {
            key = "away";
        } else {
            key = "offline";
        }
        (friendStatusArr[key] = friendStatusArr[key] ?? []).push(friend.username);
        return friendStatusArr;
        // if (!friendStatusArr[key]) {
        //     friendStatusArr[key] = [];
        // }

        friendStatusArr[key].push(friend.username);

        return friendStatusArr;
    }, {})
}

const result = whosOnline(friends);
console.log(result);

