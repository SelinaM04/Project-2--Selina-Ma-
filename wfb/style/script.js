document.addEventListener('DOMContentLoaded', function () {
    fetch('style/cards.json') 
        .then(response => response.json())
        .then(data => createFlipCards(data))
        .catch(error => console.error('Error fetching data:', error));
});

function createFlipCards(cardsData) {
    const container = document.getElementById('flip-card-container'); 

    cardsData.forEach(card => {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';

        const flipCardInner = document.createElement('div');
        flipCardInner.className = 'flip-card-inner';

        const flipCardFront = document.createElement('div');
        flipCardFront.className = 'flip-card-front';
        flipCardFront.innerHTML = `<img src="img/my_bacon.jpg" alt="${card.itemType}" style="width:100%;height:100%;">`;

        const flipCardBack = document.createElement('div');
        flipCardBack.className = 'flip-card-back';
        flipCardBack.innerHTML = `
            <h2>${card.itemType}</h2>
            <p>Brand: ${card.brand}</p>
            <p>Store: ${card.storeName}</p>
            <p>Calories: ${card.calories}</p>
            <p>Protein: ${card.protein}</p>
            <p>Dietary Information: ${card.dietaryInformation}</p>
            <p>Weight: ${card.weight}</p>
        `;

        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);

        flipCard.appendChild(flipCardInner);

        container.appendChild(flipCard);
    });
}
