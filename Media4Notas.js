const nt1 = Number (prompt("Insira a 1º Nota:"));
const nt2 = Number (prompt("Insira a 2º Nota:"));
const nt3 = Number (prompt("Insira a 3º Nota:"));
const nt4 = Number (prompt("Insira a 4º Nota:"));

if(
    nt1 < 0 || nt1 > 10 ||
    nt2 < 0 || nt2 > 10 ||
    nt3 < 0 || nt2 > 10 ||
    nt4 < 0 || nt2 > 10
){alert("Insira apenas números de 0 à 10")} else 
{
    const media = (nt1 + nt2 + nt3 + nt4) / 4;
    let situacao;

    if(media < 5){situacao = "REPROVADO"}
    if(media >= 5 & media <= 6){situacao = "RECUPERAÇÃO"}
    if(media > 6){situacao = "APROVADO"}

    alert(`Sua média final é ${media} ---> Situação: ${situacao}.`);
}