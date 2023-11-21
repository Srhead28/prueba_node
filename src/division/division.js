function division(opc, num1, num2) {
    switch (opc) {
        case 1:
            return num1 % 2;
        case 2:
            return num1 / 2 + num2 / 4;
        case 3:
            return num1 / 2 + Math.pow(num2, 3);
        default:
            throw new Error('Operación no válida');
    }
}

module.exports = division;

