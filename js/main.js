function showContainer(containerId, button) {

    hideAllImages();
    hideAllTexts();
    document.querySelectorAll("." + containerId).forEach(cont => cont.classList.remove('inactive'));
    document.querySelectorAll('.dd').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function hideAllImages() {
    const containers = document.querySelectorAll('._page4_image');
    containers.forEach(container => {
        container.classList.add('inactive');
        container.classList.remove('d-flex');
    });
}

function hideAllTexts() {
    const containers = document.querySelectorAll('._page4_text');
    containers.forEach(container => {
        container.classList.add('inactive');
    });
}

function fetchCryptoPrices() {
    const cryptocurrencies = ['bitcoin', 'ethereum', 'binancecoin', 'ripple', 'solana', 'cardano', 'tron', 'polkadot', 'dogecoin', 'chainlink', 'matic-network', 'litecoin'];

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrencies.join(',')}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            const btcPriceElements = document.querySelectorAll('.btcPrice');
            const ethPriceElements = document.querySelectorAll('.ethPrice');
            const bnbPriceElements = document.querySelectorAll('.bnbPrice');
            const solPriceElements = document.querySelectorAll('.solPrice');
            const dotPriceElements = document.querySelectorAll('.dotPrice');
            const linkPriceElements = document.querySelectorAll('.linkPrice');
            const ltcPriceElements = document.querySelectorAll('.ltcPrice');

            const btcPrice = Math.floor(data.bitcoin.usd);
            const ethPrice = Math.floor(data.ethereum.usd);
            const bnbPrice = Math.floor(data.binancecoin.usd)
            const solPrice = Math.floor(data.solana.usd)
            const dotPrice = Math.floor(data.polkadot.usd)
            const linkPrice = Math.floor(data.chainlink.usd)
            const ltcPrice = Math.floor(data.litecoin.usd)

            btcPriceElements.forEach(element => {
                element.textContent = `BTC: $${btcPrice}\u00A0`;
            });

            ethPriceElements.forEach(element => {
                element.textContent = `ETH: $${ethPrice}\u00A0`;
            });

            bnbPriceElements.forEach(element => {
                element.textContent = `BNB: $${bnbPrice}\u00A0`;
            });

            solPriceElements.forEach(element => {
                element.textContent = `SOL: $${solPrice}\u00A0`;
            });

            dotPriceElements.forEach(element => {
                element.textContent = `DOT: $${dotPrice}\u00A0`;
            });

            linkPriceElements.forEach(element => {
                element.textContent = `LINK: $${linkPrice}\u00A0`;
            });

            ltcPriceElements.forEach(element => {
                element.textContent = `LTC: $${ltcPrice}\u00A0`;
            });
        })
        .catch(error => console.error('Error fetching crypto prices:', error));
}

document.addEventListener('DOMContentLoaded', fetchCryptoPrices);

setInterval(fetchCryptoPrices, 10000);


const element = document.querySelector('.p6_block1');
let timeoutId;

function startAnimation() {
    element.classList.remove('showp');
    element.classList.add('showp6');
}

function resetAnimation() {
    // Устанавливаем задержку перед удалением класса showp6
    timeoutId = setTimeout(function() {
        element.classList.remove('showp6');
        element.classList.add('showp');
    }, 700);
}

// Очищаем таймер, если пользователь вернулся до истечения 1 секунды
element.addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
});


const element2 = document.querySelector('.p6_block3');
let timeoutId2;

function startAnimation2() {
    element2.classList.remove('showp2');
    element2.classList.add('showp6-2');
}

function resetAnimation2() {
    // Устанавливаем задержку перед удалением класса showp6
    timeoutId2 = setTimeout(function() {
        element2.classList.remove('showp6-2');
        element2.classList.add('showp2');
    }, 700);
}

// Очищаем таймер, если пользователь вернулся до истечения 1 секунды
element2.addEventListener('mouseover', function() {
    clearTimeout(timeoutId2);
});
