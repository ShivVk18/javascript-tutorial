const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //spread method

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //to flatten the another array into a simple one
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false kyunki yeh string hai 
console.log(Array.from("Hitesh")) //array bna diya
console.log(Array.from({name: "hitesh"})) // interesting - because isko yeh convert nhi karpayega toh empty array dega kyunki define nhi hai dhangse


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //return a new array from set of elements