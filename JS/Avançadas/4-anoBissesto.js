let ano = prompt("Digite o ano para consulta")
ano = parseInt(ano)

if (!ano %100 == 0 || ano % 4 == 0 && ano % 400 == 0)
    alert( ano + " eh um ano bissexto")

else 
    alert( ano  + " nao eh um ano bissexto")

