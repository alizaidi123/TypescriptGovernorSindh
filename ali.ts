//Q1 is done 
//Q2
let Name1 = "Ali"
console.log('Hello', Name1, "Lets Learn Some Typescript Today")
//Q3
console.log(Name1.toLowerCase())
console.log(Name1.toUpperCase())
//Q4 & Q5
let quote =  '"Patience is of two kinds: patience over what pains you, and patience against what you covet."'
let personality = "Hazrat Ali (A.S)"
console.log(personality, "once said,", quote)
// Q6
let wSc1 = "\t Ali \n"
console.log(wSc1)
console.log(wSc1.trim())
//Q7
let A = 2
let B = 4
let C = 6
let D = 10
let E = 16
console.log(A*B) // Multiplication
console.log(A+C) // Addition
console.log(D-A) // Subtraction
console.log(E/A) // Division
//Q8
let blank = "\n"
let Eight = 5+3
console.log(Eight,blank,Eight,blank,Eight,blank,Eight)
//Q9
let favNum=3
console.log('My Favorite Number is',favNum)
//Q10
console.log(D-A) // Subtraction
console.log(E/A) // Division
//Q11
let NameOfFriends = [ "Asad", "Faiq", "Mobin", "Sarim"]
for(let i=0; i< NameOfFriends.length; i++){console.log(
    NameOfFriends[i])
}
//Q12
for(let i=0; i< NameOfFriends.length; i++){console.log(
    "You are doing great",NameOfFriends[i])}
//Q13
let favTransport = ["Haval", "BJ40", "F150","Wrangler"]
for(let u=0; u< favTransport.length; u++){console.log(
    "One of Ali's dream cars is", favTransport[u])
}
//Q14
function inviteGuest(guest: string) {
    let message = `Dear ${guest}, You are cordially invited to dinner at my place.`
    console.log(message);
}
let guestList = ["Zaheer Hussain", "Quresha Begum", "Wasi Hasnain"]
guestList.forEach(guest => {
    inviteGuest(guest)
});

//Q15
let gNot = guestList.shift()
console.log("Unfortunately", gNot, "can't attend the party due to personal reasons")
let NewGuest = "Kaneez Tayyeba"
guestList.push(NewGuest)
guestList.forEach(guest=> {inviteGuest(guest)})

//Q16
console.log("Great News! We found a bigger table so we can have more people at dinner")
guestList.unshift("Jibran")
guestList.splice(Math.floor(guestList.length/2), 0, "Razi Hasnain")
guestList.push("Sami")
guestList.forEach(guest=> {inviteGuest(guest)})

//Q17
console.log("Apologies, we can only take in two of you as our new table won't make it on time")
while (guestList.length > 2 ){ let rGuest = guestList.pop()
console.log("Sorry", rGuest, "We can't invite you")}
guestList.forEach(guest=> {inviteGuest(guest)})
guestList.pop()
guestList.pop()
console.log("Guest list is empty")

//Q18
const WorldTourList=["Belgium", "Germany", "Canada", "Italy"]
console.log("In Original Form")
console.log(WorldTourList.join(","))
console.log("In Alphabetical Order")
console.log(WorldTourList.sort())
console.log("In Original Form")
console.log(WorldTourList.join(","))
console.log("In Reverse Form")
console.log(WorldTourList.reverse())
console.log("In Original Form")
console.log(WorldTourList.join(","))
console.log("In Alphabetical Order")
console.log(WorldTourList.sort())
console.log("In Reverse Alphabetical Order")
console.log(WorldTourList.sort((a,b) =>b.localeCompare(a) ))
console.log("In Original Form")
console.log(WorldTourList.join(","))

//Q19
console.log(guestList.length)

//Q20
let list =['Jehlum','Indus','Sutlaj','Himaliya']
for(let t=0; t< list.length ; t++){console.log(list[t])}

//Q21
let BioData = { name: "Syed Ali Saboor Zaidi",
Gender: 'Male', Age: "28", Religion: "Islam" }
console.log('Following are my personal details')
console.log(BioData)

//Q22

let array= ['Apple','Mango','Pineapple','Cherry']
console.log('Following is the Array Index Error')
console.log(array[5])

//Q23 
let bus = "hino"
console.log("Is bus === 'Hino'? I predict false")
console.log( bus === "Hino")
let bulb= "Flament"
console.log("Is bulb === 'Flament'? I predict True")
console.log( bulb ==="Flament")
let count = 6
console.log("Is count=='6'? I predict True")
console.log( count == 6 )
console.log("Is count > 7? I predict false")
console.log( count > 7 )
console.log("Is count < 7? I predict True")
console.log( count < 7 )
let num1 = 9
console.log(" Is count + num1 >= 15? I predict True")
console.log(num1+count >= 15)

//Q24
let age2 = 40;
console.log("Is age < '40'? I predict False.")
console.log(age2 < 40)
let isRaining = true;
let heavyRaining = false
let fruit2 = 'apple'
let city = 'New York'
console.log("Is isRaining == true? I predict True.")
console.log(isRaining == true)
console.log("Is fruit != 'banana'? I predict True.")
console.log(fruit2 != 'banana')
console.log("Is city === 'New York'? I predict True.")
console.log(city === 'New York')
console.log("Is isRaining == isRainin? I predict true.")
console.log(isRaining == isRaining)
console.log("Is fruit === 'orange'? I predict False.")
console.log(fruit2 === 'orange')

//Q25
let AlienCol = "Green"
if (AlienCol === "Green"){console.log("Yipee, You've Earned 50 Points")}
AlienCol = "Red"
if (AlienCol === "Red"){console.log("Sorry, You Lose")}

//Q26
AlienCol = "Green"
if (AlienCol === "Green"){ console.log("Yipee, You've Earned 50 Points")}
else { console.log("Sorry, You Lose") }

//Q27
if(AlienCol = "Green"){console.log("Yohoo! You've won 5 points")}
else if (AlienCol = "Yellow"){console.log("Yohoo! You've won 10 points")}
else if (AlienCol = "Red"){console.log("Yahoo! You've won 15 points")}
else{console.log("Oh No! You lose")}
AlienCol = "Red"
AlienCol = "Yellow"
AlienCol = "Blue"

//Q28
let a = 13
if(a < 2){console.log("The Person is Baby")}
else if(a >= 2 && a < 4){console.log("The Person is Toddler")}
else if( a >= 4 && a < 13){console.log("The Person is Kid")}
else if( a >= 13 && a < 20){console.log("The Person is Teenagers")}
else if( a >= 20 && a < 65){console.log("The Person is an Adult")}
else {console.log("The Person is Elder")}

//Q29
const FavFruit: string[] = ["Apple", "Mango", "Banna"]
if(FavFruit.indexOf("Apple") !==1){console.log("You Really Like Apple")}
if(FavFruit.indexOf("Banna")!==1){console.log("You Really Like Banna")}
if(FavFruit.indexOf("Mango")!==1){console.log("You Really Like Mango")}
if(FavFruit.indexOf("Strawberries")!==1){console.log("You don't Like Strawberries")}
if(FavFruit.indexOf("PineApple")!==1){console.log("You don't Like Strawberries")}

//Q30
function userName(user : string){
    if (user === "Admin"){console.log("Hello", user, "would you like to see a status report?")}
    else {console.log("Hello", user, "Thank You! for logging in again")}
}
let user = [ "Admin", "Shark", "Bubble", "Tank", "Thunder"]
for ( let p = 0; p < user.length; p++){userName(user[p])}

//Q31
user.pop()
user.pop()
user.pop()
user.pop()
user.pop()
if ( user.length <= 0 ){ console.log("We need to find some Users!")}

//Q32

let current_users = [ "user1","user2","user3","user4","user5"]
let new_users = ["user6","user1","USER2","user7","user8"]
for(let l=0; l< new_users.length; l++){ let Nuser = new_users[l]; 
    let userExists = false
    for ( let k =0; k < current_users.length; k++){ if (Nuser.toLocaleLowerCase() === current_users[k].toLocaleLowerCase()){
        console.log("Sorry", Nuser, "is already taken. Try something different")
    userExists = true
    break
    }
    }
    if (!userExists){console.log("Congratulation!, Your username is set as", Nuser)}
}

//Q33
let ord_Num = [ "1st", "2nd", "3rd","4th","5th","6th","7th","8th", "9th"]
for ( let u = 0; u < ord_Num.length; u++){ let ord = ord_Num[u]
    if ( ord === "1st"){console.log("1st = First")}
    else if( ord === "2nd"){console.log("2nd = Second")}
    else if ( ord === "3rd"){console.log("3rd = Third")}
    else if( ord === "4th"){console.log("4th = Fourth")}
    else if( ord === "5th"){console.log("5th = Fifth")}
    else if( ord === "6th"){console.log("6th = Sixth")}
    else if( ord === "7th"){console.log("7th = Seventh")}
    else if( ord === "8th"){console.log("8th = Eigth")}
    else if( ord === "9th"){console.log("9th = Ninth")}
}

//Q34
let pizza = [ "Cheese Burger","Peri Peri", "Creamy Ranch Sauce" ]
for(let i = 0; i < pizza.length; i++){ console.log( pizza[i] ) }
for(let i = 0; i < pizza.length; i++){ console.log( "I like ", pizza[i] ) }

//Q35
let animals = [ "Tiger", "Lion", "Cat"]
for (let i = 0; i < animals.length; i++){
    console.log( animals[i])
}
for ( let i = 0; i < animals.length; i++ ){
    if(animals[i] === "Tiger"){console.log("Tiger is carnivorous");
    }
    else if( animals[i] === "Lion"){console.log("Lion is the king of Jungle");
    }
    else{console.log("Cat is the pet animal");
    }
}
console.log("These three animals belongs to same family");

//Q36
function make_shirt( size: string, message: string){console.log("The Size of the shirt is",size,"and the message is", message);
}
make_shirt("Medium","I Love Karachi")

//Q37
function make_shr( size: string = "Large",message: string = "I love Typescript"){console.log("The Size of the shirt is",size,"and the message is", message);
}
make_shr()

//Q38
function describe_city(city: string, country: string = "Pakistan"){console.log(city,"is in",country);
}
describe_city("Karachi")
describe_city("Lahore")
describe_city("London","England")

//39
function city_country(city:string, country:string){console.log(city,country);
}
city_country("Karachi","Pakistan")
city_country("Tehran","Iran")
city_country("Moscow","Russia")

//40
type Album = {
    artist: string,
    title: string,
    Tracks?: number
} 

function make_album(artist: string, title: string, Tracks?: number): Album { let album: Album = {artist,title}
if (Tracks !== undefined){album.Tracks= Tracks}
return album 
}
let album1 = make_album("Atif Aslam", "Doori")
let album2 = make_album("Atif", "Jal Pari")
let album3 = make_album("Ali Zafar","Jhoom",5)

console.log(album1);
console.log(album2);
console.log(album3);

//41
let magicians = ["Harry Houdini", "David Blaine","Doug Henning", "Dai Vernon"]
for(let i = 0; i< magicians.length; i++){console.log(magicians[i]);
}

//Q42
function make_great(magicians: string[]) { return magicians.map( magicians => console.log("The Great", magicians)) }
make_great(magicians)

//Q43
function show_magician(magicians: string[]){ magicians.forEach(magicians => console.log(magicians))}
show_magician(magicians)

//Q44
function sandwiches( items: string[]){console.log("This Sandwich includes", items);
}
sandwiches(["Tomato", "Chicken Spreads","Cucumber"])
sandwiches(["Onion","Tomato","Cheese Spread"])
sandwiches(["Cucumber","Lattce","Salami"])

//Q45
function createcar( manufacturer: string, model: number, ... extra:  any []){ 
    const car: { manufacturer: string, model: number, extra: any}= { manufacturer,
        model,
        extra: {}
     }
     extra.forEach(extra => { Object.keys(extra).forEach(key => {
            const value = extra[key];
            car.extra[key] = value;
        });
    });
     
    return car
    }

    const mycar = createcar("Suzuki", 2008, {color: "white"}, {Gears: 5}, {features: [ "LCD", "AC", "Back Camera","5 Gear Manual","Factory Fitted CNG"]})
    console.log(mycar);
    