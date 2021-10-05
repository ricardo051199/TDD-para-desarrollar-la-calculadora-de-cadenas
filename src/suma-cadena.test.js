describe("sumar cadena ", () => {
  it("calcular suma para una cadena por defecto", () => {
    expect(calcularCadena("1,2,4,8", "")).toEqual(15);
  });   
  it("calcular suma para cualquier cadena", () => {
    expect(calcularCadena("1,3,6,18", "")).toEqual(28);
  });
});

function calcularCadena(cadena, delimitador) {
  let subCadena = "", suma = 0, baseNumerico = 10;
  for(var i = 0; i <= cadena.length; i++){
    if(parseInt(cadena[i], baseNumerico)){
      subCadena = subCadena + cadena[i];
    }else{
      suma = suma + parseInt(subCadena, baseNumerico);
      subCadena = "";
    }
  }
  return suma;
}
