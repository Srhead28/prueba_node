const multiplicacion = require("./multiplicacion");

test("Si los datos no son enteros debe retornar error", () => {
    const error = "Los datos proporcionados no son válidos";
    const result = multiplicacion("3", "8");
    expect(result).toBe(error);
});

test("Base 2, altura 4. El área debería ser 8", () => {
    const result = multiplicacion(1, 2, 4);
    expect(result).toBe(8);
});

test("8 al cuadrado debería ser 64 y 7 al cubo 343. El total debe ser 407", () => {
    const result = multiplicacion(2, 8, 7);
    expect(result).toBe(407);
});

test("Base 5, altura 7. El área debería ser 17.5", () => {
    const result = multiplicacion(3, 5, 7);
    expect(result).toBe(17.5);
});

test("Debería lanzar un error para una operación no válida", () => {
    expect(() => multiplicacion(4, 2, 3)).toThrow('Operación no válida');
});