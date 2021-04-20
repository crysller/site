function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function adcElemento(linkimg, titulo, data) {
    var elemento_pai = document.getElementById('div');

    var elemento_filho = document.createElement('div');
    elemento_filho.classList.add('col');
    elemento_filho.setAttribute('id', 'card');

    var card_filho = document.getElementById('card');
    card_filho = document.createElement('div');
    card_filho.classList.add('card', 'shadow-sm');
    card_filho.setAttribute('id', 'card-filho');

    var card_img = document.getElementById('card-filho');
    card_img = document.createElement('img');
    card_img.classList.add('bd-placeholder-img', 'card-img-top');
    card_img.setAttribute('src', linkimg);
    card_img.setAttribute('width', '100%');
    card_img.setAttribute('height','225');

    var card_neto = document.getElementById('card-filho');
    card_neto = document.createElement('div');
    card_neto.classList.add('card-body');
    card_neto.setAttribute('id', 'card-neto');

    var texto = document.getElementById('card-neto');
    texto = document.createElement('p');
    texto.classList.add('card-text');

    var texto_02 = document.getElementById('card-neto');
    texto_02 = document.createElement('p');
    texto_02.classList.add('card-text');
    texto_02.setAttribute('id', 'smalldate')
    
    var datesmall = document.getElementById('smalldate');
    datesmall = document.createElement('small');
    datesmall.classList.add('text-muted');

    card_img.append(linkimg);
    texto.append(titulo);
    datesmall.append(data);
    texto_02.appendChild(datesmall);
    card_neto.appendChild(texto);
    card_neto.appendChild(texto_02);
    card_filho.appendChild(card_img);
    card_filho.appendChild(card_neto);
    elemento_filho.appendChild(card_filho);
    elemento_pai.appendChild(elemento_filho);

  }
/* Para criar a div tem que ter todas as duas primeiras linhas e tem que ter o id no html*/
function main() {
    let data = fazGet("https://newsapi.org/v2/top-headlines?country=br&apiKey=03636560cd474b9bb033ffd175e72fa2");
    let newsJSON = JSON.parse(data);
    const keys = Object.keys(newsJSON.articles);
    keys.forEach(key => {
        adcElemento(newsJSON.articles[key]["urlToImage"], 
        newsJSON.articles[key]["title"], 
        newsJSON.articles[key]["publishedAt"]);
        //document.getElementById("autor").innerHTML += newsJSON.articles[key]["author"] + "<br>";      
    })
}
main();