async function findCard(){


let q =
document
.getElementById("search")
.value
.toLowerCase();



let stores =
await fetch("data/stores.json")
.then(r=>r.json());


let cards =
await fetch("data/cards.json")
.then(r=>r.json());



let category = null;



// поиск магазина

let shop = stores.find(
s => q.includes(s.name.toLowerCase())
);



if(shop){

category = shop.category;

}


// поиск товара

if(!category){


if(
q.includes("масло") ||
q.includes("молоко") ||
q.includes("хлеб") ||
q.includes("сыр") ||
q.includes("еда")
){

category="продукты";

}


if(
q.includes("телефон") ||
q.includes("ноут") ||
q.includes("компьют") ||
q.includes("телевизор")
){

category="электроника";

}


if(
q.includes("бенз") ||
q.includes("заправ")
){

category="азс";

}


if(
q.includes("шампунь") ||
q.includes("крем") ||
q.includes("космет")
){

category="красота";

}


if(
q.includes("таблет") ||
q.includes("лекар")
){

category="аптеки";

}


if(
q.includes("такси")
){

category="такси";

}


}



// ищем лучшую карту


let bestCard = "";
let bestCashback = 0;



cards.forEach(card=>{


let cashback =
card.cashback[category]
||
card.cashback["все"];



if(cashback > bestCashback){

bestCashback = cashback;

bestCard = card.name;

}


});





document.getElementById("result").innerHTML = `


<div>

📂 Категория:

<b>${category || "не найдена"}</b>


<br><br>


🏆 Лучшая карта:


<br>


💳 <b>${bestCard}</b>


<br>


💰 Кэшбэк:

<b>${bestCashback}%</b>


</div>


`;



}
