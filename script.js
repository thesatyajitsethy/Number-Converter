function convert() {
    var inputType = document.getElementById("inputType").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var outputDiv = document.getElementById("output");
    var output = "";

    if (inputNumber === "") {
        alert("Please enter a number.");
        return;
    }

    if (inputType === "decimal") {
        output += "<div class='result'>Binary representation: " + decimal_to_binary(inputNumber) + "</div>";
        output += "<div class='result'>Hexadecimal representation: " + decimal_to_hexadecimal(inputNumber) + "</div>";
        output += "<div class='result'>Octal representation: " + decimal_to_octal(inputNumber) + "</div>";
    } else if (inputType === "binary") {
        output += "<div class='result'>Decimal representation: " + binary_to_decimal(inputNumber) + "</div>";
        output += "<div class='result'>Hexadecimal representation: " + binary_to_hexadecimal(inputNumber) + "</div>";
        output += "<div class='result'>Octal representation: " + binary_to_octal(inputNumber) + "</div>";
    } else if (inputType === "hexadecimal") {
        output += "<div class='result'>Decimal representation: " + hexadecimal_to_decimal(inputNumber) + "</div>";
        output += "<div class='result'>Binary representation: " + hexadecimal_to_binary(inputNumber) + "</div>";
        output += "<div class='result'>Octal representation: " + hexadecimal_to_octal(inputNumber) + "</div>";
    } else if (inputType === "octal") {
        output += "<div class='result'>Decimal representation: " + octal_to_decimal(inputNumber) + "</div>";
        output += "<div class='result'>Binary representation: " + octal_to_binary(inputNumber) + "</div>";
        output += "<div class='result'>Hexadecimal representation: " + octal_to_hexadecimal(inputNumber) + "</div>";
    }

    outputDiv.innerHTML = output;
    outputDiv.style.display = "block";
}

function decimal_to_binary(decimal) {
    return parseInt(decimal).toString(2);
}

function decimal_to_hexadecimal(decimal) {
    return parseInt(decimal).toString(16);
}

function decimal_to_octal(decimal) {
    return parseInt(decimal).toString(8);
}

function binary_to_decimal(binary) {
    return parseInt(binary, 2).toString();
}

function binary_to_hexadecimal(binary) {
    return parseInt(binary, 2).toString(16);
}

function binary_to_octal(binary) {
    return parseInt(binary, 2).toString(8);
}

function hexadecimal_to_decimal(hexadecimal) {
    return parseInt(hexadecimal, 16).toString();
}

function hexadecimal_to_binary(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(2);
}

function hexadecimal_to_octal(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(8);
}

function octal_to_decimal(octal) {
    return parseInt(octal, 8).toString();
}

function octal_to_binary(octal) {
    return parseInt(octal, 8).toString(2);
}

function octal_to_hexadecimal(octal) {
    return parseInt(octal, 8).toString(16);
}
