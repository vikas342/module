let str = "Iamasoftqwer";

console.log(str.length);

let equalParts = 3;

let pos = str.length / equalParts;

let arr = [];

for(let i = 0; i < equalParts; i++)
{
    arr.push(str.substring(i * pos, (i + 1) * pos));
}

console.log(arr);