const n1 = parseInt (prompt (' Insira um número inteiro: '))
const n2 = parseInt (prompt(' Digite outro número inteiro: '))
const operacao = prompt (' Operação a ser efetuada (+,-,* ou /)')
if(operacao === "+"){
    document.write(n1 + n2);
}
else if(operacao === "-"){
        document.write (n1 - n2);
}
else if(operacao === "*"){
    document.write (n1 * n2);
}
else if(operacao === "/"){
    document.write (n1 / n2);
}