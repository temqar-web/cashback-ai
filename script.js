async function findCard(){


let q =
document.getElementById("search")
.value
.toLowerCase();



let stores =
await fetch("data/stores.json")
.then(r=>r.json());


let cards =
await fetch("data/cards.json")
.then(r=>r.json());



let shop =
stores.find(
s=>q.includes(
s.name.toLowerCase()
)
);



let category;


if(shop){

category = shop.category;

}


else {


if(q.includes("масло") ||
q.includes("еда") ||
q.includes("хлеб")){

category="продукты";

}


else if(q.includes("бенз")){

category="азс";

}


else if(q.includes("телефон") ||
q.includes("компьют")){

category="электроника";

}


else if(q.includes("шампунь")){

category="красота";

}

}



let best=null;


let max=0;



cards.forEach(card=>{


let value =
card.cashback[category]
||
card.cashback["все"];



if(value>max){

max=value;

best=card.name;

}


});



document.getElementById("result").innerHTML = `

Категория:
<b>${category || "не найдена"}</b>

<br><br>

🏆 Лучшая карта:

<br>

💳 <b>${best || "нет данных"}</b>

<br>

💰 Кэшбэк: ${max}%

`;



}
