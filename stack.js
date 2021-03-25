var jsonnomes = {
    "status": "ok",
    "totalResults": 3,
    "nomes": [{
    "name": "Pedro",
    "idade": "33"
    }, {
    "name": "Bruno",
    "idade": "27"
    }, {
    "name": "Julia",
    "idade": "25"
    }]
}

var qntResult = jsonnomes.totalResults
var wData = jsonnomes.nomes;
var i;
i=1;

while (i <= qntResult){
    for (let wIdx = 0; wIdx < wData.length; wIdx++) {
        var wHtml = ""
        const wElement = wData[wIdx];
        wHtml += "Nome : " + wElement["name"] + "  Idade :" + wElement["idade"] + "<br>"

}
    document.getElementById("nome").innerHTML += wHtml
}