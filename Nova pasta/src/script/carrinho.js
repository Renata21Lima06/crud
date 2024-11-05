function valor(valoritem){
    let valor = paserInt(valoritem)

    const dados = [

    ]

    switch(valor){
        case 1:
            let prod1 = document.querySelector("#prod1").value
            let valorProd1 = parseFloat(document.querySelector("#prodValor1"))
            let prodQtd = parseInt(document.querySelector("#prodQtd".value))
            const total = valorProd1 * prodQtd

        let prod = {usuario:"EuMan", produto:prod1, valor:valorProd1, qtd:prodQtd, total:total}
    
    dados.push(prod)
    }       
}