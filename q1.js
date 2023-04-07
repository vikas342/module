let num = 19;

let arr = {
    "10 ": "X",
    "9 ": "IX",
    "5 ": "V",
    "4 ": "IV",
    "1 ": "I"
};

let str = "";

for (const key in arr) {
    const value = arr[key];
    let y = key;
    let x = parseInt(num / y);
    if(x > 0)
    {
        for(let i = 0; i < x; i++)
        {
            str += value;
        }
    }
    num = num % y;
}

console.log(str);