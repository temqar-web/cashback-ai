async function findCard() {

    const q = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    if (!q) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    const stores = await fetch("data/stores.json").then(r => r.json());
    const cards = await fetch("data/cards.json").then(r => r.json());
    const products = await fetch("data/products.json").then(r => r.json());

    let category = null;

    // Поиск магазина
    const shop = stores.find(store =>
        q.includes(store.name.toLowerCase())
    );

    if (shop) {
        category = shop.category;
    }

    // Поиск товара
    if (!category) {

        for (const product of products) {

            const found = product.words.some(word =>
                q.includes(word.toLowerCase())
            );

            if (found) {
                category = product.category;
                break;
            }

        }

    }

    // Если категория не найдена
    if (!category) {

        document.getElementById("result").innerHTML = `
            <div class="card">
                <h3>🤔 Ничего не найдено</h3>
                <br>
                Попробуйте написать название магазина
                <br>
                или товара.
            </div>
        `;

        return;

    }

    // Поиск лучшей карты
    let bestCard = "";
    let bestCashback = -1;

    cards.forEach(card => {

        const cashback =
            card.cashback[category] ??
            card.cashback["все"] ??
            0;

        if (cashback > bestCashback) {
            bestCashback = cashback;
            bestCard = card.name;
        }

    });

    // Вывод результата
    document.getElementById("result").innerHTML = `
        <div class="card">

            <div class="category">
                📂 ${category}
            </div>

            <div class="bank">
                💳 ${bestCard}
            </div>

            <br>

            <div class="cashback">
                ${bestCashback}%
            </div>

            <br>

            <div>
                ✅ Самая выгодная карта для этой покупки
            </div>

        </div>
    `;

}
