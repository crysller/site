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

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function adcElemento(autor, titulo) {
    var elemento_pai = document.getElementById('div');
    var elemento_filho = document.createElement('div'); 
    elemento_filho.append(autor + ' / ' + titulo);
    elemento_pai.appendChild(elemento_filho);
  }
/* Para criar a div tem que ter todas as duas primeiras linhas e tem que ter o id no html*/
function main() {
    let data = fazGet("https://newsapi.org/v2/top-headlines?country=br&apiKey=03636560cd474b9bb033ffd175e72fa2");
    let newsJSON = JSON.parse(data);
    const keys = Object.keys(newsJSON.articles);
    keys.forEach(key => {
        adcElemento(newsJSON.articles[key]["author"], newsJSON.articles[key]["title"]);
        //document.getElementById("autor").innerHTML += newsJSON.articles[key]["author"] + "<br>";      
    })
}



/*
<!--div class="col">
<div class="card shadow-sm">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

  <div class="card-body">
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small class="text-muted">9 mins</small>
    </div>
  </div>
</div>
</div--> */

function adcElemento(titulo) {
  var elemento_pai = document.getElementById('div');
  var elemento_filho = document.createElement('div');
  elemento_filho.classList.add('col');
  elemento_filho.setAttribute('id', 'card');
  var card_filho = document.getElementById('card');
  card_filho = document.createElement('div');
  card_filho.classList.add('card', 'shadow-sm');
  card_filho.setAttribute('id', 'card-filho');
  var card_neto = document.getElementById('card-filho');
  card_neto = document.createElement('div');
  card_neto.classList.add('card-body');
  card_neto.setAttribute('id', 'card-neto');
  var texto = document.getElementById('card-neto');
  texto = document.createElement('p');
  texto.classList.add('card-text');
  
  //elemento_filho.append(autor + ' / ' + titulo);
  //elemento_pai.appendChild(elemento_filho);

  texto.append(titulo);
  card_neto.appendChild(texto);
  card_filho.appendChild(card_neto);
  elemento_filho.appendChild(card_filho);
  elemento_pai.appendChild(elemento_filho);

}

main();