const fahrenheitInput = document.getElementById("fahrenheit");
const celciusInput = document.getElementById("celcius");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "fahrenheit":
                celciusInput.value = (value - 32) * 5 / 9;
                break;
            case "celcius":
                fahrenheitInput.value = (value * 9 / 5) + 32;
                break;

        }

    });
}