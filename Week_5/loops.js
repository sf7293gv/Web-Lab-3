let birds = ["Owl", "Robin", "Eagle"];
console.log(birds);

birds.forEach(function (bird) {
    console.log(bird);
});

for (let x = 0; x < birds.length; x++) {
    console.log(birds[x]);
}

let text = "I took itec 2545 and itec 2425";

let replaced = text.replace("itec", "ITEC");
console.log(replaced); // won't work

let repalcedAll = text.replace(/itec/g, "ITEC");
console.log(repalcedAll);

let wrongText = "The classes are 1150, 1250, 2560";
let replaceRegeX = wrongText.replace(/\d{4}/g, "ITEC $&");
console.log(replaceRegeX);