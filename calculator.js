var result = document.getElementById("output");
function inputValue(number) {
    if (result.innerText.charAt(0) == 0) {

        result.innerText = number;

    }
    else if (result.innerText.charAt(0) != 0) {
        result.innerText += number;
    }

}
function SUM() {
    var sum = eval(result.innerText);
    result.innerText = sum;
}
function Delete() {
    result.innerText = result.innerText.slice(0, -1);
}
function reset()
{
    result.innerText=0;
}