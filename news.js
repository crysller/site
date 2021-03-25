function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function adcElemento(conteudo, titulo) {
    var elemento_pai = document.getElementById('div');
    var elemento_filho = document.createElement('div');
    elemento_filho.append(conteudo+' / '+ titulo);
    elemento_pai.appendChild(elemento_filho);
  }

function main() {
    let data = fazGet("https://newsapi.org/v2/top-headlines?country=br&apiKey=chave");
    let newsJSON = JSON.parse(data);
    console.log(newsJSON.articles);
    const keys = Object.keys(newsJSON.articles);
    keys.forEach(key => {
        adcElemento(newsJSON.articles[key]["author"], newsJSON.articles[key]["title"]);
        //document.getElementById("autor").innerHTML += newsJSON.articles[key]["author"] + "<br>";      
    })
}
main();