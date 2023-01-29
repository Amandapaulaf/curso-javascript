const lista= new Array(`São Paulo`, `Rio de Janeiro`, `Salvador`);
const idadeCompra= 15;
const estaAcompanhada= true;
console.log(lista);
if(idadeCompra>=18){
    console.log("comprador maior de idade");
    lista.splice(0,1);
}
else{
    if(estaAcompanhada){ //pode ser trocado por um else if
        console.log("comprador esta acompanhado");
        lista.splice(0,1);
    }
    else{
    console.log("comprador não é maior de idade e na esta acompanhado");}
}
console.log(lista);
