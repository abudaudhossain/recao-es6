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

/* console.log(fiveMulti(5));
console.log(twoParamiet(5, 3));
console.log(threeParamitar(2, 3, 4));
console.log(multiLineArrowfunction(3, 4));
 */
const work = num => num * 5;
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const newArray = arrNum.map(i => work(i));
// const newArray = arrNum.map(x => x* 5);
// console.log(newArray);

const oddArray = arrNum.filter(i => i % 2 != 0);
console.log(oddArray);