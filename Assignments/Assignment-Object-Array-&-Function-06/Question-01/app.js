var people = {
    friends: [],
};
var friend = {
    name: 'Zahid',
    lastName: 'Ali',
    Id: 123
};
var friend2 = {
    name: 'Slman',
    lastName: 'Shah',
    Id: 124
};
var friend3 = {
    name: 'Imran',
    lastName: 'Abas',
    Id: 125
};
function AddIntoFriends(people, friend) {
    people.friends.push(friend.name);
    return (people.friends);
}
AddIntoFriends(people, friend);
AddIntoFriends(people, friend2);
AddIntoFriends(people, friend3);
console.log(people.friends);
