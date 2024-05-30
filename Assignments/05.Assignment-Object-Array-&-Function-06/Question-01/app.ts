 type People ={
     friends:string[];
 }

 let people:People = {
    friends:[],
 }

 type Friend ={
       name:string;
       lastName:string;
       Id:number;
 }

 let friend:Friend ={
    name: 'Zahid',
    lastName: 'Ali',
    Id: 123
 }
 let friend2:Friend ={
    name: 'Slman',
    lastName: 'Shah',
    Id: 124
 }

 let friend3:Friend ={
 name: 'Imran',
 lastName: 'Abas',
 Id: 125
}

function AddIntoFriends(people:People, friend:Friend){
    people.friends.push(friend.name)
    return (people.friends)
   

    
}

AddIntoFriends(people, friend)
AddIntoFriends(people, friend2)
AddIntoFriends(people, friend3)

console.log(people.friends)


