/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
*/

let iss_location = {
"timestamp": 1515784140,
"iss_position":
{
"latitude": "49.2167",
"longitude": "100.5363"
},
"message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

let latitude = iss_location.iss_position.latitude; // a variable that contains the value of the key latitude in the object iss_location
console.log(latitude); // display the latitude value

let longitude = iss_location.iss_position.longitude; // a variable that contains the value of the key longitude in the object iss_location
console.log(longitude); // display the longitude value





/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
"AUD": 1.5417,
"BGN": 1.9558,
"BRL": 3.8959,
"CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

rates.CHF = 1.1787; // add this key/value pair to the rates object

let aud = rates.AUD; // a variable that contains the aud exchange rate

let euro100ToAUD = 100 * aud; // a calculation to exchange a 100 euros to aud
console.log("") // print an empty line
console.log("A 100 Euros to Australian Dollars: " + euro100ToAUD); // display the

let array = []; // an array to store tha value of the rates object keys

for (let key in rates) { // loop over each key in the object
    array.push(rates[key]); // push the each key's value to "array"
}

let largest = array[0]; // a variable that contains the first element in "array"

for (let i = 0; i < array.length; i++) { // two for loops over every element in "array"
    for (let j = i + 1; j < array.length; j++) { // i will be the first element, j will be the 2nd element, and the the loop will starts from there
        if (array[i] < array[j]) { // since the variable largest already contains the first element in the array, if element j > i,
            largest = array[j]; // then store j in the variable
        }
    }
}

let Key; // a new variable that will contain the key of the value that we got

for (let key in rates) { // loop over every key
    if (rates[key] == largest) { // if the value of the key is this value,
        Key = key // store this key in the Key variable
    }
}
console.log("") // print an empty line
console.log("the highest exchange rate (" + largest + ") is: " + Key); // display this key
console.log("") // print an empty line





/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
*/

let cats_and_owners = [
{ name: "Bill Clinton", cat: "Socks" },
{ name: "Gary Oldman", cat: "Soymilk" },
{ name: "Katy Perry", cat: "Kitty Purry" },
{ name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

console.log(cats_and_owners[1].cat); // print the value of cat (2nd key of object 1 -2nd- inside the cats_and_owners object

cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith"}); // add this key/value pair to the object

cats_and_owners.forEach(function (keyValPair) { // loop over every key/value pair in the object, and
    console.log(keyValPair); // print it
});




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
"prizes":[
{
"year":"2017",
"category":"physics",
"laureates":[
{
"id":"941",
"firstname":"Rainer",
"surname":"Weiss",
"motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
"share":"2"
},
{
"id":"942",
"firstname":"Barry C.",
"surname":"Barish",
"motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
"share":"4"
},
{
"id":"943",
"firstname":"Kip S.",
"surname":"Thorne",
"motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
"share":"4"
}
]
},
{
"year":"2017",
"category":"chemistry",
"laureates":[
{
"id":"944",
"firstname":"Jacques",
"surname":"Dubochet",
"motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
"share":"3"
},
{
"id":"945",
"firstname":"Joachim",
"surname":"Frank",
"motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
"share":"3"
},
{
"id":"946",
"firstname":"Richard",
"surname":"Henderson",
"motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
"share":"3"
}
]
},
{
"year":"2017",
"category":"medicine",
"laureates":[
{
"id":"938",
"firstname":"Jeffrey C.",
"surname":"Hall",
"motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
"share":"3"
},
{
"id":"939",
"firstname":"Michael",
"surname":"Rosbash",
"motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
"share":"3"
},
{
"id":"940",
"firstname":"Michael W.",
"surname":"Young",
"motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
"share":"3"
}
]
},
{
"year":"2017",
"category":"literature",
"laureates":[
{
"id":"947",
"firstname":"Kazuo",
"surname":"Ishiguro",
"motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
"share":"1"
}
]
},
{
"year":"2017",
"category":"peace",
"laureates":[
{
"id":"948",
"firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
"motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
"share":"1",
"surname":""
}
]
},
{
"year":"2017",
"category":"economics",
"laureates":[
{
"id":"949",
"firstname":"Richard H.",
"surname":"Thaler",
"motivation":"\"for his contributions to behavioural economics\"",
"share":"1"
}
]
}
]
}

console.log("") // print an empty line
console.log("") // print an empty line

for (let i = 0; i < nobel_prize_winners_2017.prizes[3].laureates.length; i++) { // loop over element 3 in the prizes array in the nobel_prize_winners_2017 object
    let firstName = nobel_prize_winners_2017.prizes[3].laureates[i].firstname; // store the first name of every laureate in this variable
    let surName = nobel_prize_winners_2017.prizes[3].laureates[i].surname; // store the surname of every laureate in this variable
    console.log(`Literature Nobel laureate: ${firstName} ${surName}`); // display this line
}

let c = 1; // a counter

console.log("") // print an empty line
console.log("Physics Nobel laureate IDs:")
for (let i = 0; i < nobel_prize_winners_2017.prizes[0].laureates.length; i++) { // loop over element 0 in the prizes array in the object
    let id = nobel_prize_winners_2017.prizes[0].laureates[i].id; // a variable that will contain the id of each laureate

    console.log("Laureate " + c + ": " + id); // display this line
    c++; // add 1 to the counter
}

console.log("") // print an empty line
console.log("Prize categories:")

for (let i = 0; i < nobel_prize_winners_2017.prizes.length; i++) { // loop over every element in the prizes array in the object
    let category = nobel_prize_winners_2017.prizes[i].category; // a variable that will contain each category
    console.log(category) // display that category
}

let categories = nobel_prize_winners_2017.prizes.length;  // the number of categories = the length of the prizes array
console.log("") // print an empty line
console.log(`There are ${categories} prize categories.`) // print this line


let laureatesCounter = 0; // a counter


for (let i = 0; i < nobel_prize_winners_2017.prizes.length; i++) { // loop over the prizes array
    if (nobel_prize_winners_2017.prizes[i].year === "2017") { // if the year in prizes array element is 2017 then,
        laureatesCounter = laureatesCounter + nobel_prize_winners_2017.prizes[i].laureates.length // add the size of the element's laureates to the counter
    }
}

console.log(`There are ${laureatesCounter} laureates in 2017.`); // print this line.
