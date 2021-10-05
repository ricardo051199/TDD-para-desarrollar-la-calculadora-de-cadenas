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
});

function calcularCadena(cadena, delimitador) {
  let subCadena = "", suma = 0, baseNumerico = 10;
  let entero;
  for(var i = 0; i <= cadena.length; i++){
    if(parseInt(cadena[i], baseNumerico)){
      subCadena = subCadena + cadena[i];
    }else{
      entero = parseInt(subCadena, baseNumerico)
      if(!delimitador || ((cadena[i] == delimitador || !cadena[i]) && entero)) suma = suma + entero;
      subCadena = "";
    }
  }
  return suma;
}
