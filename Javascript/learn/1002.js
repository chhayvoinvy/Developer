
const toFahrenheight = document.getElementById("toFahrenheight");
const toCelsius = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let temp = document.getElementById("temp");

function convert () {
    if (toFahrenheight.checked) {
        temp = Number(temp.value);
        // console.log(typeof temp);

        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "`F";
        // console.log(temp);
    } else if (toCelsius.checked) {
        temp = Number(temp.value);
        // console.log(typeof temp);

        temp = (temp - 32) * (5 / 9);

        result.textContent = temp + "`C";
        // console.log(temp);
    }
}