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
         document.getElementById("Nome").innerHTML += moedaJSON[key]["name"] + "<br>";
         document.getElementById("Alta").innerHTML += moedaJSON[key]["high"] + "<br>";
         document.getElementById("Baixa").innerHTML += moedaJSON[key]["low"] + "<br>";
         document.getElementById("Compra").innerHTML += moedaJSON[key]["bid"] + "<br>";
         document.getElementById("Venda").innerHTML += moedaJSON[key]["ask"] + "<br>";
    })
}
main()