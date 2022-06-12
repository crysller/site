function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    let data = fazGet("https://economia.awesomeapi.com.br/json/all");
    let moedaJSON = JSON.parse(data);
    console.log(moedaJSON)
    const keys = Object.keys(moedaJSON)
    keys.forEach(key => {
         document.getElementById("Nome1").innerHTML += moedaJSON[key]["name"] + "<br>";
         document.getElementById("Alta1").innerHTML += moedaJSON[key]["high"] + "<br>";
         document.getElementById("Baixa1").innerHTML += moedaJSON[key]["low"] + "<br>";
         document.getElementById("Compra1").innerHTML += moedaJSON[key]["bid"] + "<br>";
         document.getElementById("Venda1").innerHTML += moedaJSON[key]["ask"] + "<br>";
    })
}
main()