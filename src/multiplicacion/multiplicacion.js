function multiplicacion(opc, num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Los datos proporcionados no son válidos";
    }

    switch (opc) {
        case 1:
            return num1 * num2;
        case 2:
            return Math.pow(num1, 2) + Math.pow(num2, 3);
        case 3:
            return (num1 * num2) / 2;
        default:
            throw new Error("Operación no válida");
    }
}

module.exports = multiplicacion;


