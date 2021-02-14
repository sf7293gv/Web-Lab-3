let animals = ['lions', 'tiger', 'cheetah'];
animals.push('elephant'); // end

console.log(animals);
animals.unshift("deer"); // beginning

console.log(animals);
let first = animals.shift();

console.log(first);
let last = animals.pop();

console.log(last);
console.log(animals);

animals.reverse();
console.log(animals);

let people = ['man', 'woman', 'guy','me'];
let peopleNamesLenghts = [];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].length);
    peopleNamesLenghts[i] = people[i].length;
}

console.log(peopleNamesLenghts);
