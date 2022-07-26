/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va (22)yosh kiritaman. 
 Va u menga returnida yangi array qaytaradi va 
 unda faqat 22 yoshga teng va undan kattalarni qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]

let userAge = prompt("Yoshni kiriting:");

function ageGreaterThan(array, minAge) {
    let newArray = [];

    for (const item of array) {
        if (userAge <= item.age) {
            newArray.push(item.name);
            newArray.push(item.age);
        }
    }

    return newArray;
}

console.log(ageGreaterThan(users, 22));
alert(ageGreaterThan(users, 22));


