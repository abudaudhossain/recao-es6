const myBrather = "Delowr hossain";
let myGF = "Tanisa";
myGF = "Arita";
const myFriend = {
    name: "Ratul",
    age: 22,
    PaymentAddress: "Rowmari, Kurigram",
    phone: "01783739283"
}

const myStringTemp = `hi,
I am Abu Daud Hossain. My Brathers name ${myBrather}.
my gf name ${myGF}. My bestu name ${myFriend.name}. He is ${myFriend.age} old
.`

// console.log(myStringTemp);

const fiveMulti = num => num * 5;

const twoParamiet = (num1, num2) => (num1 + 2) * (num2 + 2);
const threeParamitar = (num1, num2, num3) => num1 * num2 * num3;
const multiLineArrowfunction = (num1, num2) => {
    const sum1 = num1 + 2;
    const sum2 = num2 + 2;
    const result = sum1 * sum2;
    return result;
}

console.log(fiveMulti(5));
console.log(twoParamiet(5, 3));
console.log(threeParamitar(2, 3, 4));
console.log(multiLineArrowfunction(3, 4))