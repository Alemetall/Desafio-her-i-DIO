let nomeHeroi = "Alemetal"
let qtdXp = 15000
let nivel = ""
//console.log("Digite o nome do seu herói: " + nomeHeroi)

if (qtdXp <= 1000)
{
    nivel = "Ferro"
}
else if (qtdXp >=1001 && qtdXp <=2000)
{
    nivel = "Bonze"
}
else if (qtdXp >=2001 && qtdXp <=5000)
{
    nivel = "Prata"
}
else if (qtdXp >=6001 && qtdXp <= 7000)
{
    nivel = "Ouro"
}
else if (qtdXp >=7001 && qtdXp <= 8000)
{
    nivel = "Platina"
}
else if (qtdXp >=8001 &&  qtdXp <= 9000)
{
    nivel = "Ascedente"
}
else if (qtdXp >=9001 && qtdXp <= 10000)
{
    nivel = "Imortal"
}
else if (qtdXp >= 10001) // Pode ser apenas um Else ou deixar a condição explicida.
{
    nivel = "Raridade"
}

console.log ("Seu herói é: " + nomeHeroi)
console.log ("XP: " + qtdXp)
console.log ("Nível: " + nivel) 
console.log ("O herói de nome " + nomeHeroi + " está no nível de: " + nivel)