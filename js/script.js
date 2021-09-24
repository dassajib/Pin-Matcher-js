function makeSurePinLength() {
    const pin = Math.round(Math.random() * 10000);
    pinString = pin + "";
    if (pinString.length == 4) {
        return pin;

    }
    else {
        // Recursive func
        return makeSurePinLength();

    }

}

function generatePin() {
    const pin = makeSurePinLength();
    document.getElementById("get-pin").value = pin;
}

document.getElementById("key-pad-parent-node").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeInput = document.getElementById("pressed-pin");
    if (isNaN(number)) {
        if (number == "C") {
            typeInput.value = "";
        }
    }
    else {
        previousNumber = typeInput.value;
        newNumber = previousNumber + number;
        typeInput.value = newNumber;
    }
})

function verifyPin() {
    const currentPin = document.getElementById("get-pin").value;
    const currentTypedPin = document.getElementById("pressed-pin").value;
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    if (currentPin == currentTypedPin) {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";

    }
    else {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    }
}