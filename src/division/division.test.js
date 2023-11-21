const division = require("./division");

test("El módulo de 3 debe ser 1", () => {
    const result = division(1, 3);
    expect(result).toBe(1);
});

test("10 dividido 2 es 5 y 20 dividido 4 es 5, el resultado de la suma de operaciones debe ser 10", () => {
    const result = division(2, 10, 20);
    expect(result).toBe(10);
});

test("2.5 dividido 2 es 1.25 y 3 al cubo es 27, por tanto la suma de operaciones debería ser 28.25", () => {
    const result = division(3, 2.5, 3);
    expect(result).toBe(28.25);
});

test("Debería lanzar un error para una operación no válida", () => {
    expect(() => division(4, 2, 3)).toThrow('Operación no válida');
});
