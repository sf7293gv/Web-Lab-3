function shout(text) {
    let shout_text = text.toUpperCase() + "!";
    return shout_text;
}

console.log(shout("Hello World"));

function f_to_c(f) {
    let c = (f - 32) * 5 / 9;
    return c;
}

let temp = 75;

let tempc = f_to_c(temp);
console.log(tempc);

console.log(`Today's temp is ${tempc.toFixed(2)}C which is = to ${temp}F`)