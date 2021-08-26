let a=10
let b=5

const operator = ("+")

let result

if (operator == '+')
{
    result = a + b;
}
else if (operator == '-')
{
    result = a - b;
}
else if (operator == '*') {
    result = a * b;
}
else
{
    result = a / b;
}

//console.log(`${a} ${operator} ${b} = ${result}`)

console.log("Result is :", result)
