let formElement = document.querySelector(".js-form");
let ammountElement = document.querySelector(".js-ammount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 0.21;
let rateUSD = 0.23;
let rateGBP = 0.19;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let ammount = +ammountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = ammount * rateEUR;
            break;

        case "USD":
            result = ammount * rateUSD;
            break;

        case "GBP":
            result = ammount * rateGBP;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});