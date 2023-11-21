function resta(num1, num2, num3) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
        return "Datos inválidos";
    }

    return num1 - num2 - num3;
}

module.exports = resta;


