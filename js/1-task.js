/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va telefon nomer kiritaman. 
 Va u menga returnida shu nomer kimga tegishliligini 
 chiqarib beradi. Agar yo'q bo'lsa bo'sh string qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
]

let userNum = prompt("Raqamingizni kiriting:");

function findUser(array, number) {
    let user = "";
    for (let i = 0; i < array.length; i++) {
        if (number === users[i].telNumber) {
            user = users[i].name;
        }
    }
    return user;
}

alert(findUser(users, userNum));
console.log(findUser(users, userNum));