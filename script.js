function findCard(){


let text = document
.getElementById("search")
.value
.toLowerCase();



let result =
document.getElementById("result");



if(text.includes("пятер")
|| text.includes("магнит")
|| text.includes("масло")
|| text.includes("продукт")){


result.innerHTML = `

🛒 Продукты

🏆 Лучшая карта:

💳 Альфа-Банк

Кэшбэк: 3%

`;

}


else if(
text.includes("dns")
||
text.includes("электро")
||
text.includes("телефон")
){


result.innerHTML = `

💻 Электроника

🏆 Лучшая карта:

💳 Озон Банк

Кэшбэк: 5%

`;

}


else if(
text.includes("бенз")
||
text.includes("азс")
||
text.includes("лукойл")
){


result.innerHTML = `

⛽ АЗС

🏆 Лучшая карта:

💳 ОТП

Кэшбэк: 5%

`;

}


else {


result.innerHTML = `

❓ Пока не знаю

Добавим этот магазин позже

`;

}


}
