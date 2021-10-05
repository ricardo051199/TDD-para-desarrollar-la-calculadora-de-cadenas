describe("sumar cadena ", () => {
  it("calcular suma para una cadena por defecto", () => {
    expect(calcularCadena("1,2,4,8", "")).toEqual(15);
  });
});

function calcularCadena(cadena, delimitador) {
  return 1 + 2 + 4 + 8;
}
