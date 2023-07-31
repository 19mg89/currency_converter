{
    const calculateResult = (ammount, currency) => {

        const rateEUR = 0.21;
        const rateUSD = 0.23;
        const rateGBP = 0.19;

        switch (currency) {
            case "EUR":
                return ammount * rateEUR;

            case "USD":
                return ammount * rateUSD;

            case "GBP":
                return ammount * rateGBP;
        }
    };

    const updateResultText = (ammount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const ammountElement = document.querySelector(".js-ammount");
        const currencyElement = document.querySelector(".js-currency");
        const ammount = +ammountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(ammount, currency);

        updateResultText(ammount, currency, result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}