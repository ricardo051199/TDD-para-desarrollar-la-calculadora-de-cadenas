describe("sumar cadena ", () => {
  it("calcular suma para una cadena por defecto", () => {
    expect(calcularCadena("1,2,4,8", "")).toEqual(15);
  });   
  it("calcular suma para cualquier cadena", () => {
    expect(calcularCadena("1-2,3", "")).toEqual(6);
  });
  it("calcular suma de una cadena con un delimitador por defecto", () => {
    expect(calcularCadena("6;7;4", ";")).toEqual(17);
  });
  it("calcular suma de una cadena con un delimitador por defecto", () => {
    expect(calcularCadena("2, 1001", "")).toEqual(2);
  });
  it("calcular suma de una cadena con un delimitador de cualquier longitud ", () => {
    expect(calcularCadena("1***2***3", "***")).toEqual(6);
  });
  it("calcular suma de una cadena con multiples delimitadores", () => {
    expect(calcularCadena("1*2%3,7-9", "['*', '%']")).toEqual(22);
  });
});

function calcularCadena(cadena, delimitador) {
  let suma = 0, baseNumerico = 10;

  if(delimitador) cadena = cadena.split(delimitador);
  else cadena = cadena.split(/\W+/);

  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] <= 1000) suma = suma + Number(cadena[i]);
  }
  
  return suma;
}
